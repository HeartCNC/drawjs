function load(srcName: string, url: string): Promise<void>
function load(srcName: string): Promise<HTMLImageElement | void>
function load(srcName: string, url?: string): Promise<HTMLImageElement | void> {
  return url ? loadImage(srcName) : loadFont(srcName, url)
}

export {
  load
}

export function loadImage(src: string): Promise<HTMLImageElement | void> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.src = src
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = (e) => {
      resolve(img)
    }
    img.onerror = (e) => {
      console.warn(`Image '${src}' load error.`)
      resolve()
    }
  })
}

export function loadFont(fontFamily: string, url: string): Promise<void> {
  return new Promise(resolve => {
    const font = new FontFace(fontFamily, `url(${url})`)
    font.load().then(f => {
      (document.fonts as any).add(f)
    }).then(() => {
      resolve()
    }).catch(() => {
      console.warn(`Font '${fontFamily}' load error.`)
      resolve()
    })
  })
}
