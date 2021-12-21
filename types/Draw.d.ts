import { ICircle } from "./DisplayObject/Circle";
import { IRectangle } from "./DisplayObject/Rectangle";
import { IText } from "./DisplayObject/Text";
import { ITexture } from "./DisplayObject/Texture";
interface DrawOptions {
    width: number;
    height: number;
}
export declare class Draw {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    __options: DrawOptions;
    constructor(options?: DrawOptions);
    text(options: IText): Draw;
    image(options: ITexture): Draw;
    rectangle(options: IRectangle): Draw;
    circle(options: ICircle): Draw;
    clear(): void;
    line(): Draw;
    point(): Draw;
    toDataURL(type?: 'image/png' | 'image/jpeg' | string, quality?: number): string;
    static build(options: DrawOptions): Draw;
}
export {};
