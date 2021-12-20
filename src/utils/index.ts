export function loadImage(src: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.src = src
    img.onload = (e) => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}
