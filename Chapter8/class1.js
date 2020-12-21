class Person {
  constructor() {
    this.name = new String('Jack')
    this.sayName = () => console.log(this.name);
    this.nicknames = ['Jake', 'J-Dog']
  }

  // 定义在类的原型对象上
  locate() {
    console.log('prototype', this);
  }
  // 定义在类本身上
  static locate() {
    console.log('class', this);
  }
}


let p1 = new Person(),
    p2 = new Person()

p1.sayName() // Jack
p2.sayName() // Jack

console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName) // false;
