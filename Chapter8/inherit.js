// 重温构造函数、原型、实例关系
// 每个构造函数否有一个原型对象 prototype
// 原型有一个属性指回构造函数 constructor
// 实例有一个内部指针指向原型 __proto__

function SuperType() {
  this.property = true
}


SuperType.prototype.getSuperValue = function () {
  return this.property
}


function SubType() {
  this.subproperty = false
}

// 继承SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subproperty
}


let instance = new SubType()
console.log(instance.getSuperValue()); // true


// 原型与继承关系

// 1. 使用instanceof
console.log(instance instanceof Object); //true
console.log(instance instanceof SubType); //true
console.log(instance instanceof SuperType); //true

// 2. isPrototypeOf isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(SubType.prototype.isPrototypeOf(instance)); // true
console.log(SuperType.prototype.isPrototypeOf(instance)); // true


// 原型链的问题

function Parent() {
  this.colors = ['red', 'blue', 'green']
}


function Child() {}
Child.prototype = new Parent()

let instance1 = new Child()
instance1.colors.push('black')
console.log(instance1.colors); //[ 'red', 'blue', 'green', 'black' ]

let instacne2 = new Child()
console.log(instacne2.colors); //[ 'red', 'blue', 'green', 'black' ]

