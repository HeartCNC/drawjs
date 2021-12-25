import { IDisplayObject, DisplayObject } from "./index";
export interface ITexture extends IDisplayObject {
    /**
     * 图像
     */
    image: HTMLImageElement;
}
/**
 * 绘制图像
 */
export declare class Texture extends DisplayObject {
    image: HTMLImageElement;
    constructor(options?: ITexture);
    render(context: CanvasRenderingContext2D): void;
}
