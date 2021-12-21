declare function load(srcName: string, url: string): Promise<void>;
declare function load(srcName: string): Promise<HTMLImageElement | void>;
export { load };
export declare function loadImage(src: string): Promise<HTMLImageElement | void>;
export declare function loadFont(fontFamily: string, url: string): Promise<void>;
