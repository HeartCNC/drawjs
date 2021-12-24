import { assignOption } from '../shared/index'
import { typeColor } from '../shared/type'
import { DisplayObject, IDisplayObject } from './index'

export interface IRectangle extends IDisplayObject {
  /**
   * 填充颜色
   */
  color?: typeColor
  /**
   * 边框线条的宽度
   */
  borderWidth?: number
  /**
   * 边框的颜色
   */
  borderColor?: string
}

export class Rectangle extends DisplayObject {
  /**
   * 填充颜色
   */
  color?: typeColor = ''
  /**
   * 边框线条的宽度
   */
  borderWidth?: number = 0
  /**
   * 边框的颜色
   */
  borderColor?: string = ''

  constructor(options?: IRectangle) {
    super(options)
    assignOption(this, options)
  }

  render(context: CanvasRenderingContext2D) {
    context.strokeStyle = this.borderColor
    context.lineWidth = this.borderWidth
    context.strokeRect(this.x, this.y, this.width, this.height)
    
    context.fillStyle = this.color
    context.fillRect(this.x + this.borderWidth / 2, this.y + this.borderWidth / 2, this.width - this.borderWidth, this.height- this.borderWidth)
  }
}
