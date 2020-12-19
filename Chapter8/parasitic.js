// 寄生式继承
// 类似于寄生构造函数和工厂模式： 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}


function createAnother(original) {
  let clone = object(original) //通过调用函数创建一个新对象
  clone.sayHi = function () {   // 以某种方式增强这个对象
    console.log('Hi');
  }
  return clone // 返回这个对象
}



let person = {
  name: 'Randy',
  friends:['Shelby', 'Court', 'Van']
}


let anotherPerson = createAnother(person)
anotherPerson.sayHi() // Hi



// 寄生式组合继承
// !组合继承存在着效率问题 ~ 父类构造函数始终会被调用两次
// function SuperType(name) {
//   this.name = name
//   this.colors = ['red','blue','green']
// }


// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// }


// function SubType(name, age) {
//   // 继承属性
//   SuperType.call(this, name) //! 第二次

//   this.age = age
// }


// // 继承方法
// SubType.prototype = new SuperType() // !第一次

// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// }

// ! 寄生式组合继承不通过调用父类构造函数给子类原型赋值，而是取的父类原型的一个副本
// 即 寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型

function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype) // 创建对象
  prototype.constructor = subType // 增强对象
  subType.prototype = prototype // 赋值对象
}

function SuperType(name) {
  this.name = name
  this.colors = ['red','blue','green']
}


SuperType.prototype.sayName = function () {
  console.log(this.name);
}


function SubType(name, age) {
  SuperType.call(this, name) 

  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function () {
  console.log(this.age);
}
