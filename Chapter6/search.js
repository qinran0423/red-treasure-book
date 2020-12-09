let numbers = [1,2,3,4,5,4,3,2,1]

console.log(numbers.indexOf(4)); // 3
console.log(numbers.lastIndexOf(4)); // 5
console.log(numbers.includes(4)); // 3

console.log(numbers.indexOf(4, 4)); // 5
console.log(numbers.lastIndexOf(4, 4)); // 3
console.log(numbers.includes(4, 7)); // false

let person = {name: 'Randy'}
let people = [{name: 'Randy'}]
let morePeople = [person]

console.log(people.indexOf(person)); // -1
console.log(morePeople.indexOf(person)); // 0
console.log(people.includes(person)); // false
console.log(morePeople.includes(person)); // true

const people1 = [
  {
    name: 'Matt',
    age: 27
  },
  {
    name: 'Randy',
    age: 29
  }
]


console.log(people1.find((item, index) =>  item.age <28)); // { name: 'Matt', age: 27 }
console.log(people1.findIndex((item, index) =>  item.age <28)); // 0
