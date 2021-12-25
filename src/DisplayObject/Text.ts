import { assignOption } from "../shared/index"
import { DisplayObject, IDisplayObject } from "./index"

export type TextJustifyAlign = 'center' | 'left' | 'right'

export type TextItemAlign = 'center' | 'top' | 'bottom'

export interface IText extends IDisplayObject {
  /**
   * 文本
   */
  text: string
  /**
   * 水平对齐方式
   */
  justifyAlign?: TextJustifyAlign
  /**
   * 垂直对齐方式
   */
  itemAlign?: TextItemAlign
  /**
   * 行间距
   */
  rowSpacing?: number
  /**
   * 字体样式
   */
  font?: string
  /**
   * 字体大小
   */
  fontSize?: number
  /**
   * 字体
   */
  fontFamily?: string
  /**
   * 字体粗细
   */
  fontWeight?: string
  /**
   * 字间距
   */
  letterSpacing?: number
  /**
   * 颜色
   */
  color?: string
}

/**
 * 绘制文本
 */
export class Text extends DisplayObject {
  text: string = ''
  justifyAlign: TextJustifyAlign = 'left'
  itemAlign: TextItemAlign = 'top'
  rowSpacing?: number = 2
  font: string = ''
  fontSize: number = 32
  fontFamily: string = ''
  fontWeight: string = 'normal'
  letterSpacing: number = 0
  color: string = ''
  constructor(options?: IText) {
    super(options)
    assignOption(this, options)
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
     * 测量文本的高度
     */
    const textHeight = row * (this.rowSpacing + singleRowHeight) + singleRowHeight
    /**
     * 根据垂直对齐方式计算的高度偏移量
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
