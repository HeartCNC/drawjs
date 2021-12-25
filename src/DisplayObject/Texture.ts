import { assignOption } from "../shared/index"
import { IDisplayObject, DisplayObject } from "./index"

export interface ITexture extends IDisplayObject {
  /**
   * 图像
   */
  image: HTMLImageElement
}

/**
 * 绘制图像
 */
export class Texture extends DisplayObject {
  image: HTMLImageElement = null
  constructor(options?: ITexture) {
    super(options)
    assignOption(this, options)
    this.width = this.width || this.image.width
    this.height = this.height || this.image.height
  }

  render(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}
