const o = {
  foo: 'bar',
  baz: 1,
  qux: {}
}

console.log(Object.values(o)); // [ 'bar', 1, {} ]
console.log(Object.entries(o)); // [ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]


// 这两个方法执行对象的浅复制 
// !符号属性会被忽略
const a = { 
  qux: {}
}


console.log(Object.values(a)[0] ===  a.qux); // true
console.log(Object.entries(a)[0][1] === a.qux); // true

const sym = Symbol()
const b = {
  [sym]: 'foo'
}


console.log(Object.values(b)); //[]
console.log(Object.entries(b));//[]