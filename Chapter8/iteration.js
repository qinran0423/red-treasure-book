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


function Person() {
}


// Person.prototype = {
//   name: 'randy',
//   age: 18,
//   sayName() {
//     console.log(this.name);
//   }
// }

// let friend = new Person()

// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true

// console.log(friend.constructor == Person); // false
// console.log(friend.constructor == Object); // true
// !Person.prototype的constructor属性就不指向Person, 则指向了Object




// Person.prototype = {
//   constructor: Person,
//   name: 'randy',
//   age: 18,
//   sayName() {
//     console.log(this.name);
//   }
// }


// !这种方式恢复constructor属性会创建一个enumberable为true的属性。原生constructor属性默认是不可枚举的

Person.prototype = {
  name: 'randy',
  age: 18,
  sayName() {
    console.log(this.name);
  }
}

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})






