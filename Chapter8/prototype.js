// 每个函数都创建一个protototype属性， 这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法
function Person() {}

Person.prototype.name = 'Randy'
Person.prototype.age = 30
Person.prototype.job = '程序员'
Person.prototype.sayName = function () {  
  console.log(this.name);
}


let person1 = new Person()
person1.sayName() // Randy

let person2 = new Person()
person2.sayName() // Randy


console.log(person1);

// 理解原型
function Person1() {}


console.log(typeof Person1.prototype); // object
console.log(Person1.prototype); // Person1 {}


console.log(Person1.prototype.__proto__ === Object.prototype); // true
console.log(Person1.prototype.__proto__.constructor === Object); // true
console.log(Person1.prototype.__proto__.__proto__ === null); // true



let biped = { 
  numLegs: 2
}

let people = {
  name: 'Matt'
}


Object.setPrototypeOf(people, biped)


console.log(people.name); // Matt
console.log(people.numLegs); // 2
console.log(Object.getPrototypeOf(people) === biped); // true


function Child() {}

Child.prototype.name = 'randy'

let child = new Child()

console.log(child.hasOwnProperty('name')); // false
console.log('name' in child); // true
child.name = 'Mack'
console.log(child.hasOwnProperty('name')); // true
console.log('name' in child); // true

delete child.name
console.log(child.hasOwnProperty('name')); // false
console.log('name' in child); // true


// 确定某个属性是否存在于原型上
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object)
}

console.log(hasPrototypeProperty(child, 'name')); // true



console.log('constructor' in child); // true0