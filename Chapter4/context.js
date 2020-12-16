// var color = 'blue'

// function changeColor() {
//   if(color === 'blue') {
//     color = 'red'
//   } else {
//     color = 'blue'
//   }
// }


// changeColor()



var color = 'blue'

function changeColor() {
  let anotherColor = 'red'

  function swapColors() {
    let tempColor = anotherColor
    anotherColor = color
    color = tempColor
    // 这里可以访问color、 anotherColor 、tempColor
  }
  // 这里可以访问color 、anotherColor ，但是访问不到tempColor
  swapColors()
}

// 这里只能访问color
changeColor()