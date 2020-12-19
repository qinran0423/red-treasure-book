function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'randy',
  friends: ['Shelby', 'Court', 'Van']
}


let anotherPerosn = object(person)
anotherPerosn.name = 'Greg'
anotherPerosn.friends.push('Rob')

let yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Bar')

console.log(person.friends); // [ 'Shelby', 'Court', 'Van', 'Rob', 'Bar' ]


let another = Object.create(person)
another.friends.push('www')
console.log(person.friends); // [ 'Shelby', 'Court', 'Van', 'Rob', 'Bar', 'www' ]



let third = Object.create(person, {
  name: {
    value: 'Randy'
  }
})



console.log(third.name); // Randy