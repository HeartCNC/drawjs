import { typeColor } from "../shared/type";
import { DisplayObject, IDisplayObject } from "./index";
export interface ICircle extends IDisplayObject {
    color?: typeColor;
    radius: number;
}
export declare class Circle extends DisplayObject {
    color?: typeColor;
    radius: number;
    constructor(options?: ICircle);
    render(context: CanvasRenderingContext2D): void;
}
