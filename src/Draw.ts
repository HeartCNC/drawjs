import { canvasRender } from "./Canvas/render"
import { Circle, ICircle } from "./DisplayObject/Circle"
import { IRectangle, Rectangle } from "./DisplayObject/Rectangle"
import { IText, Text } from "./DisplayObject/Text"
import { ITexture, Texture } from "./DisplayObject/Texture"
import { mergeOption } from "./shared/index"

interface DrawOptions {
  width: number
  height: number
}

const defaultOptions: DrawOptions = {
  width: 750,
  height: 1334
}

export class Draw {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  __options: DrawOptions

  constructor(options?: DrawOptions) {
    this.__options = <DrawOptions>mergeOption(defaultOptions, options || {})
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.__options.width
    this.canvas.height = this.__options.height
    this.context = this.canvas.getContext('2d')
  }

  text(options: IText): Draw {
    const text = new Text(options)
    canvasRender(this.context, text)
    return this
  }
  
  image(options: ITexture): Draw {
    if (!options.image) {
      console.warn('Element Image Not Found.');
      return
    }
    const texture = new Texture(options)
    canvasRender(this.context, texture)
    return this
  }
  
  rectangle(options: IRectangle): Draw {
    const rectangle = new Rectangle(options)
    canvasRender(this.context, rectangle)
    return this
  }

  circle(options: ICircle): Draw {
    canvasRender(this.context, new Circle(options))
    return this
  }

  line(): Draw {
    return this
  }

  point(): Draw {
    return this
  }

  addChild(): Draw {
    return this
  }

  render() {}

  static build(options: DrawOptions) {
    return new Draw(options)
  }

  static use(fn) {
    fn(this)
  }
}
