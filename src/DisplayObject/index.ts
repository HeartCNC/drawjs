import { assignOption, mergeOption } from "../shared/index"
import { radius } from "../shared/var"

type renderHook = (context: CanvasRenderingContext2D) => void

export interface IDisplayObject {
  /**
   * x位置
   */
  x?: number
  /**
   * y位置
   */
  y?: number
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  rotate?: number
  opacity?: number

  beforeRender?: renderHook
  afterRender?: renderHook
}

const defaultOptions: IDisplayObject = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rotate: 0,
  opacity: 1,

  beforeRender: () => {},
  afterRender: () => {}
}

export class DisplayObject {
  /**
   * x位置
   */
  x?: number
  /**
   * y位置
   */
  y?: number
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  rotate?: number
  opacity?: number
  
  beforeRender?: renderHook
  afterRender?: renderHook
  constructor(options?: IDisplayObject) {
    assignOption(
      this,
      mergeOption(defaultOptions, options || {})
    )
  }

  prerender(context) {
    context.translate(this.x, this.y)
    context.rotate(this.rotate * radius)
    context.translate(-this.x, -this.y)
    context.globalAlpha = this.opacity
  }

  render(context: CanvasRenderingContext2D): void {}
}
