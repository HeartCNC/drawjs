import { IDisplayObject, DisplayObject } from "./index";
export interface ITexture extends IDisplayObject {
    image: HTMLImageElement;
    radius?: number;
}
export declare class Texture extends DisplayObject {
    image: HTMLImageElement;
    constructor(options?: ITexture);
    render(context: CanvasRenderingContext2D): void;
}
