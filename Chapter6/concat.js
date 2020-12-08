let colors = ['red','green','blue']
let colors2 = colors.concat('yellow', ['black', 'brown'])
console.log(colors); //[ 'red', 'green', 'blue']
console.log(colors2); //[ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]


// 不打平数组
// 参数重写
let newColors = ['black', 'brown']
let moreNewColors = {
  [Symbol.isConcatSpreadable]: true,
  0: 'pink',
  1: 'cyan'
}

newColors[Symbol.isConcatSpreadable] = false

// 强制不打平数组
let colors3 = colors.concat('yellow', newColors) 
console.log(colors3) //[ 'red', 'green', 'blue', 'yellow', ['black', 'brown'] ]

// 强制打平类数组对象
let colors4 = colors.concat(moreNewColors)
console.log(colors4) // ["red", "green", "blue", "pink", "cyan"]