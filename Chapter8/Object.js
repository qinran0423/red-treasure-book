let {length} = 'foobar'
console.log(length); // 6

let {constructor: c} = 4
console.log(c === Number); // true


// 工厂模式
function createPerson(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name);
  }
  return o
}


let person1 = createPerson('Randy', 18, 'software Engineer')
let person2 = createPerson('Greg', 27, 'Doctor')


function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name);
  }
}


console.log(Person);


let person3 = new Person('Randy', 18, 'software Engineer')
let person4 = new Person('Greg', 27, 'Doctor')

console.log(person3.constructor == Person); // true
console.log(person4.constructor == Person); // true
// constructor 用于标识对象类型的

console.log(person3 instanceof Object); // true
console.log(person3 instanceof Person); // true
console.log(person4 instanceof Object); // true
console.log(person4 instanceof Person); // true

function Person1(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}


function  sayName() {
  console.log(this.name);
}


let obj1 = new Person1('Randy', 18, 'software Engineer')
let obj2 = new Person1('Greg', 27, 'Doctor')

console.log(obj1.sayName == obj2.sayName); // true