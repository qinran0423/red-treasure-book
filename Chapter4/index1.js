function addTen(num) {
  num += 10
  return num
}


let count = 20
let result = addTen(count)
console.log(count); //20
console.log(result);// 30



function setName(obj) {
  obj.name = 'randy'
}

let person = new Object()

setName(person)
console.log(person.name); // randy


function setName1(obj) {
  obj.name = 'randy'
  obj = new Object()
  obj.name = 'Greg'
}

let person1 = new Object()
setName1(person1)
console.log(person1.name); //randy