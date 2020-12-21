//  类可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法
// 实例化
class Person {
  constructor(override) {
    this.foo = 'foo'
    if(override) {
      return {
        bar: 'bar'
      }
    }
  }
}


let p1 = new Person(),
    p2 = new Person(true)

console.log(p1); // Person { foo: 'foo' }
console.log(p1 instanceof Person);  // true


console.log(p2); // { bar: 'bar' }
console.log(p2 instanceof Person); //. false


console.log(typeof Person);// function


console.log(Person.prototype);  // { constructor: false() }
console.log(Person === Person.prototype.constructor); // true


console.log(p1.constructor === Person); // true
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Person.constructor ); // fasle

let p3 = new Person.constructor()
console.log(p3.constructor === Person); // false
console.log(p3  instanceof Person); // fasle
console.log(p3 instanceof Person.constructor); // true
