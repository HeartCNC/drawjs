import { canvasRender } from "./Canvas/render"
import { Circle, ICircle } from "./DisplayObject/Circle"
import { IRectangle, Rectangle } from "./DisplayObject/Rectangle"
import { IText, Text } from "./DisplayObject/Text"
import { ITexture, Texture } from "./DisplayObject/Texture"
import { assignOption } from "./shared/index"

interface DrawOptions {
  width: number
  height: number
}

/**
 * 绘制目标对象
 */
export class Draw {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  __options: DrawOptions = {
    width: 750,
    height: 1334
  }

  constructor(options?: DrawOptions) {
    assignOption(this.__options, options)
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.__options.width
    this.canvas.height = this.__options.height
    this.context = this.canvas.getContext('2d')
  }
  
  /**
  * 绘制文本
  */
  text(options: IText): Draw {
    const text = new Text(options)
    canvasRender(this.context, text)
    return this
  }

  /**
  * 绘制图像
  */
  image(options: ITexture): Draw {
    if (!options.image) {
      console.warn('Element Image Not Found.');
      return this
    }
    const texture = new Texture(options)
    canvasRender(this.context, texture)
    return this
  }

  /**
  * 绘制矩形
  */
  rectangle(options: IRectangle): Draw {
    const rectangle = new Rectangle(options)
    canvasRender(this.context, rectangle)
    return this
  }

  /**
   * 绘制圆形
   */
  circle(options: ICircle): Draw {
    canvasRender(this.context, new Circle(options))
    return this
  }

  /**
   * 清理画布
   */
  clear(): void {
    this.context.clearRect(0, 0, this.__options.width, this.__options.height)
  }

  /**
   * 转成base64
   */
  toDataURL(type: 'image/png' | 'image/jpeg' | string = 'image/png', quality: number = 0.92): string {
    return this.canvas.toDataURL(type, quality)
  }
}
