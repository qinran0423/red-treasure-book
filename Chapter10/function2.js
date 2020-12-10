function callSomeFunction(someFunction, someArgument) {
  return someFunction(someArgument)
}


function add(num) {
  return num + 10
}

let result = callSomeFunction(add, 10)
console.log(result); // 20



function getGreeting(name) {
  return `Hello, ${name}`
}

let result2 = callSomeFunction(getGreeting, 'Randy')
console.log(result2); //Hello, Randy




function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    let value1 = object1[propertyName]
    let value2 = object2[propertyName]

    if(value1 < value2) {
      return -1
    } else if(value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}

let data = [
  {name: 'randy', age: 18},
  {name: 'mack', age: 19}
]


console.log(data.sort(createComparisonFunction('age'))); // [ { name: 'randy', age: 18 }, { name: 'mack', age: 19 } ]

