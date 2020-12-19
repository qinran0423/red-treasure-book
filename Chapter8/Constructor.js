function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}

function SubType() {
  // 继承SuperType
  SuperType.call(this, 'randy')
}


let instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors); //[ 'red', 'blue', 'green', 'black' ]

console.log(instance1);

let instance2 = new SubType()
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]


// 缺点
// 必须在构造函数中定义方法，因此函数不能重用
// 子类不能访问父类原型上定义的方法

