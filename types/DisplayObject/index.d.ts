declare type renderHook = (context: CanvasRenderingContext2D) => void;
export interface IDisplayObject {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: number;
    opacity?: number;
    beforeRender?: renderHook;
    afterRender?: renderHook;
}
export declare class DisplayObject {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: number;
    opacity?: number;
    beforeRender?: renderHook;
    afterRender?: renderHook;
    constructor(options?: IDisplayObject);
    prerender(context: any): void;
    render(context: CanvasRenderingContext2D): void;
}
export {};
