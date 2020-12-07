
let person = new Object()
person.name = 'randy'
console.log(person); //{ name: 'randy' }

let person1 = {
  name: 'randy',
  age: 29,
  5: 10
}

console.log(person1); //{ name: 'randy', age: 29 }
console.log(person1[5]);