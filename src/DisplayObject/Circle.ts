import { assignOption } from "../shared/index"
import { typeColor } from "../shared/type"
import { PIx2 } from "../shared/var"
import { DisplayObject, IDisplayObject } from "./index"

export interface ICircle extends IDisplayObject {
  /**
   * 填充颜色
   */
  color?: typeColor
  /**
   * 半径
   */
  radius: number
}

export class Circle extends DisplayObject {
  /**
   * 填充颜色
   */
  color?: typeColor = ''
  /**
   * 半径
   */
  radius: number = 0
  constructor(options?: ICircle) {
    super(options)
    assignOption(this, options)
  }
  
  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.fillStyle = this.color
    context.arc(this.x, this.y, this.radius, 0, PIx2, false)
    context.fill()
    context.closePath()
  }
}
