// splice 主要目的是在数组中插入元素

let colors = ['red', 'green', 'blue']

// 删除 
let removed = colors.splice(0,1)
console.log(colors); // [ 'green', 'blue' ]
console.log(removed); //[ 'red' ]

removed = colors.splice(1,0, 'yellow', 'orange')
console.log(colors); // [ 'green', 'yellow', 'orange', 'blue' ]
console.log(removed); // []

removed = colors.splice(1, 1, 'red', 'purple')
console.log(colors); // [ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(removed); // [ 'yellow' ]