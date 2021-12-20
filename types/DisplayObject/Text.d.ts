import { DisplayObject, IDisplayObject } from "./index";
export interface IText extends IDisplayObject {
    text: string;
    align?: CanvasTextAlign;
    baseline?: CanvasTextBaseline;
    lineHeight?: number;
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
    align: CanvasTextAlign;
    baseline: CanvasTextBaseline;
    lineHeight: number;
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
