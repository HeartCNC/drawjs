/**
 *
 * @param srcName 图像路径或字体名
 * @param url 字体路径
 */
declare function load(srcName: string, url: string): Promise<void>;
declare function load(srcName: string): Promise<HTMLImageElement | void>;
export { load };
/**
 * 加载图像
 * @param src 图像路径
 */
export declare function loadImage(src: string): Promise<HTMLImageElement | void>;
/**
 * 加载字体文件
 * @param fontFamily 字体名称
 * @param url 字体路径
 */
export declare function loadFont(fontFamily: string, url: string): Promise<void>;
