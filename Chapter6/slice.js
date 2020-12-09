// slice 不影响原始数组

let colors = ['red', 'green', 'blue', 'yellow', 'purple']
let colors2 = colors.slice(1)
console.log(colors2); //[ 'green', 'blue', 'yellow', 'purple' ]
let colors3 = colors.slice(1,4)
console.log(colors3); //[ 'green', 'blue', 'yellow' ]