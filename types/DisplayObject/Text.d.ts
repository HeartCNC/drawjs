import { DisplayObject, IDisplayObject } from "./index";
export declare type TextJustifyAlign = 'center' | 'left' | 'right';
export declare type TextItemAlign = 'center' | 'top' | 'bottom';
export interface IText extends IDisplayObject {
    /**
     * 文本
     */
    text: string;
    /**
     * 水平对齐方式
     */
    justifyAlign?: TextJustifyAlign;
    /**
     * 垂直对齐方式
     */
    itemAlign?: TextItemAlign;
    /**
     * 行间距
     */
    rowSpacing?: number;
    /**
     * 字体样式
     */
    font?: string;
    /**
     * 字体大小
     */
    fontSize?: number;
    /**
     * 字体
     */
    fontFamily?: string;
    /**
     * 字体粗细
     */
    fontWeight?: string;
    /**
     * 字间距
     */
    letterSpacing?: number;
    /**
     * 颜色
     */
    color?: string;
}
/**
 * 绘制文本
 */
export declare class Text extends DisplayObject {
    text: string;
    justifyAlign: TextJustifyAlign;
    itemAlign: TextItemAlign;
    rowSpacing?: number;
    font: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
    letterSpacing: number;
    color: string;
    constructor(options?: IText);
    render(context: CanvasRenderingContext2D): void;
}
