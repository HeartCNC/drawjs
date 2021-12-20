import { DisplayObject } from "../DisplayObject/index";

export function canvasRender(context: CanvasRenderingContext2D, displayObject: DisplayObject) {
  context.save()

  displayObject.beforeRender(context)

  displayObject.prerender(context)

  displayObject.render(context)

  displayObject.afterRender(context)

  context.restore()
}
