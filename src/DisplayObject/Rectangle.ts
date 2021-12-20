import { assignOption, mergeOption } from '../shared/index'
import { typeColor } from '../shared/type'
import { DisplayObject, IDisplayObject } from './index'

export interface IRectangle extends IDisplayObject {
  color?: typeColor
  borderWidth?: number
  borderColor?: string
}

const defaultOptions: IRectangle = {
  color: '',
  borderWidth: 0,
  borderColor: ''
}

export class Rectangle extends DisplayObject {
  color?: typeColor
  borderWidth?: number
  borderColor?: string

  constructor(options?: IRectangle) {
    super(options)
    assignOption(
      this,
      mergeOption(defaultOptions, options || {})
    )
  }

  render(context: CanvasRenderingContext2D) {
    context.strokeStyle = this.borderColor
    context.lineWidth = this.borderWidth
    context.strokeRect(this.x, this.y, this.width, this.height)
    
    context.fillStyle = this.color
    context.fillRect(this.x + this.borderWidth / 2, this.y + this.borderWidth / 2, this.width - this.borderWidth, this.height- this.borderWidth)
  }
}
