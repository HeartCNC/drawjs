import { typeColor } from '../shared/type';
import { DisplayObject, IDisplayObject } from './index';
export interface IRectangle extends IDisplayObject {
    /**
     * 填充颜色
     */
    color?: typeColor;
    /**
     * 边框线条的宽度
     */
    borderWidth?: number;
    /**
     * 边框的颜色
     */
    borderColor?: string;
}
/**
 * 绘制矩形
 */
export declare class Rectangle extends DisplayObject {
    /**
     * 填充颜色
     */
    color?: typeColor;
    /**
     * 边框线条的宽度
     */
    borderWidth?: number;
    /**
     * 边框的颜色
     */
    borderColor?: string;
    constructor(options?: IRectangle);
    render(context: CanvasRenderingContext2D): void;
}
