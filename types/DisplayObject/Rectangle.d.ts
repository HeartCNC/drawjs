import { typeColor } from '../shared/type';
import { DisplayObject, IDisplayObject } from './index';
export interface IRectangle extends IDisplayObject {
    color?: typeColor;
    borderWidth?: number;
    borderColor?: string;
}
export declare class Rectangle extends DisplayObject {
    color?: typeColor;
    borderWidth?: number;
    borderColor?: string;
    constructor(options?: IRectangle);
    render(context: CanvasRenderingContext2D): void;
}
