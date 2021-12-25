declare type renderHook = (context: CanvasRenderingContext2D) => void;
export interface IDisplayObject {
    /**
     * x位置
     */
    x?: number;
    /**
     * y位置
     */
    y?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 高度
     */
    height?: number;
    /**
     * 旋转角度 单位：度
     */
    rotate?: number;
    /**
     * 不透明度
     */
    opacity?: number;
    /**
     * 钩子函数，渲染前执行
     */
    beforeRender?: renderHook;
    /**
     * 钩子函数，渲染后执行
     */
    afterRender?: renderHook;
}
export declare class DisplayObject {
    /**
     * x位置
     */
    x?: number;
    /**
     * y位置
     */
    y?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 高度
     */
    height?: number;
    /**
     * 旋转角度 单位：度
     */
    rotate?: number;
    /**
     * 不透明度
     */
    opacity?: number;
    /**
     * 钩子函数，渲染前执行
     */
    beforeRender?: renderHook;
    /**
     * 钩子函数，渲染后执行
     */
    afterRender?: renderHook;
    constructor(options?: IDisplayObject);
    prerender(context: any): void;
    render(context: CanvasRenderingContext2D): void;
}
export {};
