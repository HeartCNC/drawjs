import { IDisplayObject, DisplayObject } from "./index"

export interface ITexture extends IDisplayObject {
  image: HTMLImageElement
  radius?: number
}

export class Texture extends DisplayObject {
  public image: HTMLImageElement
  constructor(options?: ITexture) {
    super(options)
    this.image = options.image
    this.width = this.width || this.image.width
    this.height = this.height || this.image.height
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(this.x, this.y, 330, 0, Math.PI * 2, false)
    context.stroke()
    context.moveTo(this.x, this.y)
    context.closePath()
    context.clip()

    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}
