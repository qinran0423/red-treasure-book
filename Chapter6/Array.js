console.log(Array.from("matt"));  //[ 'm', 'a', 't', 't' ]

const m = new Map().set(1,2)
                    .set(3,4)
const s = new Set().add(1)
                    .add(2)
                    .add(3)
                    .add(4)
console.log(Array.from(m)); //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s)); //[ 1, 2, 3, 4 ]


const a1 = [1,2,3,4]
const a2 = Array.from(a1) // 对现有数组执行浅拷贝
console.log(a1 === a2); //false


const a = ['foo', 'bar', 'baz', 'qux']

const aKeys = Array.from(a.keys())
console.log(aKeys); //[ 0, 1, 2, 3 ]
const aValues = Array.from(a.values())
console.log(aValues); //[ 'foo', 'bar', 'baz', 'qux' ]
const aEntries = Array.from(a.entries())
console.log(aEntries); //[ [ 0, 'foo' ], [ 1, 'bar' ], [ 2, 'baz' ], [ 3, 'qux' ] ]


const zeroes = [0,0,0,0,0]

zeroes.fill(5)
console.log(zeroes); //[ 5, 5, 5, 5, 5 ]



// let colors = ['red', 'blue', 'green']
// console.log(colors.toString()) //red,blue,green
// console.log(colors.valueOf()) //[ 'red', 'blue', 'green' ]
// console.log(colors) //[ 'red', 'blue', 'green' ]


let colors = new Array()
let count = colors.push('red', 'green')
console.log(count) // 2 返回数组的新长度

count = colors.push('black')
console.log(count) // 3

// console.log(colors)


// let item = colors.pop()
// console.log(item) // black

let item = colors.shift()
console.log(item) // red
console.log(colors.length) // 2


let values = [1,2,3,4,5]
values.reverse()
console.log(values) //[ 5, 4, 3, 2, 1 ]


function compare(value1, value2) {
  if(value1 < value2) {
    return -1
  } else if(value1 > value2) {
    return 1
  } else {
    return 0
  }
}

values.sort(compare)
console.log(values) //[ 1, 2, 3, 4, 5 ]

















