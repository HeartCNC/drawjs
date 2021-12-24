# Draw.js

---

![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/@actly/drawjs/0.1.0) ![npm](https://img.shields.io/npm/dw/@actly/drawjs) ![npm](https://img.shields.io/npm/v/@actly/drawjs)

> 适用于浏览器的快速生成海报的 Javascript 库

## 入门

### 安装

npm

```bash
npm install @actly/drawjs
```

浏览器

```html
<script src="/path/to/@actly/drawjs.js"></script>
```

### 用法

```js
new Draw(options: DrawOptions): Draw
```

- `options: DrawOptions`

|  参数  |  类型  | 默认值 |    备注    |
| :----: | :----: | :----: | :--------: |
| width  | number |  750   | 画布的宽度 |
| height | number |  1334  | 画布的高度 |

#### 元素共享参数

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      x       |  number  |    0     |       坐标x        |
|      y       |  number  |    0     |       坐标y        |
|    width     |  number  |   750    |     画布的宽度     |
|    height    |  number  |   1334   |     画布的高度     |
|    rotate    |  number  |    0     | 旋转角度，单位：度 |
|   opacity    |  number  |    1     |      不透明度      |

#### 钩子

|     名称     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
| beforeRender | function | () => {} |    渲染前的钩子    |
| afterRender  | function | () => {} |    渲染后的钩子    |

### 可选元素

- 图片 `image`

|  参数   |  类型  | 默认值 |        备注        |
| :-----: | :----: | :----: | :----------------: |
|  image  | HTMLImageElement |   -    |       用于渲染在画布的img        |

- 文本 `text`

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

- 圆形 `circle`

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      color       |  string  |         |      填充颜色      |
| radius |  number | 0 | 圆的半径  |


- 矩形 `rectangle`

|     参数     |   类型   |  默认值  |        备注        |
| :----------: | :------: | :------: | :----------------: |
|      color       |  string  |         |      填充颜色      |
| borderWidth | number | 0 | 边框的宽度 |
| borderColor | string |  | 边框的颜色 |

#### 示例

```js
import Draw, { utils } from '@actly/drawjs'
import bg from './assets/bg-poster.png'
import font from './assets/font.ttf'

const draw = Draw.build({
  width: 750,
  height: 1334
})

async function toCanvas() {
  await utils.loadFont('selfFont', font)
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
  .text({
    text: '把感动我的阳光，分享给热爱生活的你。',
    x: 32,
    y: 0,
    width: 226,
    height: 420,
    fontSize: 30,
    color: '#fff',
    letterSpacing: 8,
    rowSpacing: 20,
    itemAlign: 'center'
  })
  .toDataURL()
}

toCanvas()
```

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