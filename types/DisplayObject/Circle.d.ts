import { typeColor } from "../shared/type";
import { DisplayObject, IDisplayObject } from "./index";
export interface ICircle extends IDisplayObject {
    /**
     * 填充颜色
     */
    color?: typeColor;
    /**
     * 半径
     */
    radius: number;
}
/**
 * 绘制圆形
 */
export declare class Circle extends DisplayObject {
    /**
     * 填充颜色
     */
    color?: typeColor;
    /**
     * 半径
     */
    radius: number;
    constructor(options?: ICircle);
    render(context: CanvasRenderingContext2D): void;
}
