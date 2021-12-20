import { assignOption, mergeOption } from "../shared/index"
import { typeColor } from "../shared/type"
import { PIx2 } from "../shared/var"
import { DisplayObject, IDisplayObject } from "./index"

export interface ICircle extends IDisplayObject {
  color?: typeColor
  radius: number
}

const defaultOptions: ICircle = {
  color: '',
  radius: 0
}

export class Circle extends DisplayObject {
  public color?: typeColor
  public radius: number
  constructor(options?: ICircle) {
    super(options)
    assignOption(
      this,
      mergeOption(defaultOptions, options)
    )
  }
  
  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.fillStyle = this.color
    context.arc(this.x, this.y, this.radius, 0, PIx2, false)
    context.fill()
    context.closePath()
  }
}
