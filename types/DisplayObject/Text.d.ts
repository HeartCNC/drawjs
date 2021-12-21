import { DisplayObject, IDisplayObject } from "./index";
export declare type TextJustifyAlign = 'center' | 'left' | 'right';
export declare type TextItemAlign = 'center' | 'top' | 'bottom';
export interface IText extends IDisplayObject {
    text: string;
    justifyAlign?: TextJustifyAlign;
    itemAlign?: TextItemAlign;
    rowSpacing?: number;
    font?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string;
    letterSpacing?: number;
    color?: string;
}
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
