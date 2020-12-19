function SuperType(name) {
  this.name = name
  this.colors = ['red','blue','green']
}


SuperType.prototype.sayName = function () {
  console.log(this.name);
}


function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)

  this.age = age
}


// 继承方法
SubType.prototype = new SuperType

SubType.prototype.sayAge = function () {
  console.log(this.age);
}



let instance1 = new SubType('randy', 18)
instance1.colors.push('black')
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName() // randy
instance1.sayAge() // 18

let instance2 = new SubType('Mack', 29)
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
instance2.sayAge() // 29


