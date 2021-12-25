import { ICircle } from "./DisplayObject/Circle";
import { IRectangle } from "./DisplayObject/Rectangle";
import { IText } from "./DisplayObject/Text";
import { ITexture } from "./DisplayObject/Texture";
interface DrawOptions {
    width: number;
    height: number;
}
/**
 * 绘制目标对象
 */
export declare class Draw {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    __options: DrawOptions;
    constructor(options?: DrawOptions);
    /**
    * 绘制文本
    */
    text(options: IText): Draw;
    /**
    * 绘制图像
    */
    image(options: ITexture): Draw;
    /**
    * 绘制矩形
    */
    rectangle(options: IRectangle): Draw;
    /**
     * 绘制圆形
     */
    circle(options: ICircle): Draw;
    /**
     * 清理画布
     */
    clear(): void;
    /**
     * 转成base64
     */
    toDataURL(type?: 'image/png' | 'image/jpeg' | string, quality?: number): string;
}
export {};
