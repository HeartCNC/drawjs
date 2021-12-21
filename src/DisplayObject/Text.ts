import { assignOption, mergeOption } from "../shared/index"
import { DisplayObject, IDisplayObject } from "./index"

export type TextJustifyAlign = 'center' | 'left' | 'right'

export type TextItemAlign = 'center' | 'top' | 'bottom'

export interface IText extends IDisplayObject {
  text: string
  justifyAlign?: TextJustifyAlign
  itemAlign?: TextItemAlign
  rowSpacing?: number
  font?: string
  fontSize?: number
  fontFamily?: string
  fontWeight?: string
  letterSpacing?: number
  color?: string
}

const defaultOptions: IText = {
  text: '',
  justifyAlign: 'left',
  itemAlign: 'top',
  rowSpacing: 2,
  font: '',
  fontSize: 32,
  fontFamily: '',
  fontWeight: 'normal',
  letterSpacing: 0,
  color: ''
}

export class Text extends DisplayObject {
  public text: string
  public justifyAlign: TextJustifyAlign
  public itemAlign: TextItemAlign
  public rowSpacing?: number
  public font: string
  public fontSize: number
  public fontFamily: string
  public fontWeight: string
  public letterSpacing: number
  public color: string
  constructor(options?: IText) {
    super(options)
    assignOption(
      this,
      mergeOption(defaultOptions, options || {})
    )
  }
  render(context: CanvasRenderingContext2D) {
    const fontFamily = this.fontFamily || getComputedStyle(context.canvas).fontFamily
    context.font = `${this.fontWeight} ${this.fontSize}px ${fontFamily}`
    context.fillStyle = this.color
    context.textBaseline = 'top'
    context.textAlign = 'left'

    const originTextMetrics = context.measureText(this.text)

    const singleRowHeight = originTextMetrics.actualBoundingBoxDescent
    // 文本总宽度
    let __actualWidth = 0
    // 处理 letterSpacing
    const arrText = this.text.split('').map(item => {
      const width = context.measureText(item).width
      __actualWidth += width + (__actualWidth === 0 ? 0 : this.letterSpacing)
      return {
        char: item,
        width,
        x: 0,
        y: 0,
        row: 0
      }
    })
    const __width = this.width || __actualWidth
    const arrTextRowWidth = []
    let x = 0
    let y = this.y
    let row = 0
    let cntActualWidth = 0
    for (let k = 0; k < arrText.length; k++) {
      const el = arrText[k]

      const nextWidth = cntActualWidth + el.width + (cntActualWidth === 0 ? 0 : this.letterSpacing)
      // 长度大于宽度时
      if (nextWidth > __width) {
        arrTextRowWidth.push(cntActualWidth)
        cntActualWidth = 0
        row++
        y += singleRowHeight + this.rowSpacing
      } else if (k + 1 === arrText.length) {
        arrTextRowWidth.push(nextWidth)
      }
      cntActualWidth += el.width + (cntActualWidth === 0 ? 0 : this.letterSpacing)
      el.x = cntActualWidth - el.width
      el.y = y
      el.row = row
    }

    /**
     * The height of text after canvas measure
     */
    const textHeight = row * (this.rowSpacing + singleRowHeight) + singleRowHeight
    /**
     * According to the itemAlign and height compute offset
     */
    let offsety = 0
    if (this.height > textHeight) {
      if (this.itemAlign === 'bottom') {
        offsety = this.height - textHeight
      } else if (this.itemAlign === 'center') {
        offsety = (this.height - textHeight) / 2
      }
    }
    arrText.forEach(item => {
      let rx = this.x
      if (this.justifyAlign === 'center') {
        rx = this.x + (__width - arrTextRowWidth[item.row]) / 2
      } else if (this.justifyAlign === 'right') {
        rx = this.x + __width - arrTextRowWidth[item.row]
      }
      context.fillText(item.char, rx + item.x, offsety + item.y)
    })
  }
}
