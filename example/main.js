const Draw = window.Draw.default
const {
  Text,
  utils: {
    loadImage
  }
} = window.Draw
const draw = Draw.build()
document.body.appendChild(draw.canvas)

async function toCanvas() {
  const img = await loadImage('./images/bg.jpg')
  draw
  // .text({
  //   width: 490,
  //   text: '123456789012345678901234567890123456789012345678901234567890',
  //   x: 0,
  //   y: 0,
  //   fontSize: 32,
  //   letterSpacing: 10,
  //   align: 'right',
  //   color: '#ff0',
  //   lineHeight: 0,
  //   rowSpacing: 10,
  //   rotate: 45
  // })
  // .text({
  //   // width: 490,
  //   text: 'tetete',
  //   color: '#fff',
  //   x: 500,
  //   fontSize: 46,
  //   opacity: 0.3
  // })
  .image({
    x: 100,
    y: 50,
    image: img
  })
  .text({
    text: 'tetete',
    color: '#fff',
    x: 500,
    fontSize: 46
  })
  .rectangle({
    x: 100,
    y: 500,
    width: 100,
    height: 100,
    color: '#ff0',
    borderWidth: 4,
    borderColor: '#f0f'
  })
  .circle({
    x: 100,
    y: 450,
    radius: 20,
    color: '#fff'
  })
}

toCanvas()
