import { DisplayObject } from "../DisplayObject/index";
/**
 * 画布渲染
 * @param context 画布渲染器
 * @param displayObject 渲染的对象
 */
export function canvasRender(context: CanvasRenderingContext2D, displayObject: DisplayObject) {
  context.save()

  displayObject.beforeRender(context)

  displayObject.prerender(context)

  displayObject.render(context)

  displayObject.afterRender(context)

  context.restore()
}
