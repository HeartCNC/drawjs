# Draw.js

<p align="center">
<img src="https://img.shields.io/bundlephobia/minzip/@actly/drawjs/0.1.0" /> <img src="https://img.shields.io/npm/dw/@actly/drawjs"/> <img src="https://img.shields.io/npm/v/@actly/drawjs" /><a href="https://github.com/HeartCNC/drawjs" target="__blank">
</p>

> 适用于浏览器的快速生成海报的 Javascript 库

## 🚀 功能

- 🧩 图片

- 🔡 文本

- 🟡 圆形

- ⏹ 矩形

## 📦 安装

npm

```bash
npm install @actly/drawjs
```

浏览器

```html
<script src="/path/to/@actly/drawjs.js"></script>
```

CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@actly/drawjs@0.1.0/dist/draw.min.js"></script>
```

## 🔧 用法

### 示例

```js
import Draw, { utils } from '@actly/drawjs'
const bg = require('./assets/bg-poster.png')

const draw = new Draw({
  width: 750,
  height: 1334
})

async function toPoster() {
  // image base64
  const imgSrc = draw.image({
    image: await utils.loadImage(bg)
  })
  .rectangle({
    x: 32,
    y: 0,
    width: 226,
    height: 420,
    color: '#000',
    opacity: 0.5
  })
  .toDataURL()
}
toPoster()
```

### Draw

- `options: DrawOptions`

|  参数  |  类型  | 默认值 |    备注    |
| :----: | :----: | :----: | :--------: |
| width  | number |  750   | 画布的宽度 |
| height | number |  1334  | 画布的高度 |

#### 用法

```js
const draw = new Draw({
  width: 750,
  height: 1334
})
```

#### 类型声明

```ts
interface DrawOptions {
  width: number;
  height: number;
}

export declare class Draw {
  // 原生canvas
  canvas: HTMLCanvasElement;
  // canvas对应的2d context
  context: CanvasRenderingContext2D;
  // 配置项
  __options: DrawOptions;
  constructor(options?: DrawOptions);
  // 绘制文本
  text(options: IText): Draw;
  // 绘制图像
  image(options: ITexture): Draw;
  // 绘制矩形
  rectangle(options: IRectangle): Draw;
  // 绘制圆形
  circle(options: ICircle): Draw;
  // 清理画布
  clear(): void;
  // 导出base64 同canvas.toDataURL
  toDataURL(type?: 'image/png' | 'image/jpeg' | string, quality?: number): string;
}
```

### 元素共享参数

- `options: IDisplayObject`

#### 类型声明

```ts
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
```

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      x       |  number  |    0     |       坐标x        |
|      y       |  number  |    0     |       坐标y        |
|    width     |  number  |   750    |     画布的宽度     |
|    height    |  number  |   1334   |     画布的高度     |
|    rotate    |  number  |    0     | 旋转角度，单位：度 |
|   opacity    |  number  |    1     |      不透明度      |

|     名称     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
| beforeRender | function | () => {} |    渲染前的钩子    |
| afterRender  | function | () => {} |    渲染后的钩子    |

### 可选渲染元素

#### 图像 `image(options: ITexture): Draw`

##### 类型声明

```ts
export interface ITexture extends IDisplayObject {
  image: HTMLImageElement;
}
```

|  参数   |  类型  | 默认值 |        备注        |
| :-----: | :----: | :----: | :----------------: |
|  image  | HTMLImageElement |   -    |       用于渲染在画布的img        |

#### 文本 `text(options: IText): Draw`

##### 类型声明

```ts
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
```

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      text       |  string  |         |      渲染在画布上的文本      |
| justifyAlign |  TextJustifyAlign  |    left     |     水平对齐方式      |
| itemAlign |  TextItemAlign  |   top |     垂直对齐方式     |
|    rowSpacing    |  number  |   0   |     行间距     |
|    fontSize    |  number  |    0     | 字体大小 |
| fontFamily |  string  |         |      字体      |
| fontWeight | string | normal | 字体粗细 |
| letterSpacing | number | 0 | 字间距 |
| color | string |  | 文本颜色 |

#### 圆形 `circle(options: ICircle): Draw`

##### 类型声明

```ts
export interface ICircle extends IDisplayObject {
  color?: typeColor;
  radius: number;
}
```

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      color       |  string  |         |      填充颜色      |
| radius |  number | 0 | 圆的半径  |


#### 矩形 `rectangle(options: IRectangle): Draw`

##### 类型声明

```ts
export interface IRectangle extends IDisplayObject {
  color?: typeColor;
  borderWidth?: number;
  borderColor?: string;
}
```

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      color       |  string  |         |      填充颜色      |
| borderWidth | number | 0 | 边框的宽度 |
| borderColor | string |  | 边框的颜色 |

### 工具方法

```js
import Draw, { utils } from '@actly/drawjs'
import bg from './assets/bg.png'
import font from './assets/font.ttf'

async function loadResource() {
  await utils.loadFont('myFont', font)
  await utils.loadImage(bg)
}

// 或者
async function loadResource() {
  await utils.load('myFont', font)
  await utils.load(bg)
}
loadResource()
```

- `load(srcName: string, url: string): Promise<void>`

- `load(srcName: string): Promise<HTMLImageElement | void>`

加载图片或者字体资源

- `loadImage(src: string): Promise<HTMLImageElement | void>`

加载图片资源

- `loadFont(fontFamily: string, url: string): Promise<void>`

加载字体资源

## Issues

[https://github.com/HeartCNC/drawjs/issues](https://github.com/HeartCNC/drawjs/issues)