let numbers = [1,2,3,4,5,4,3,2,1]

let everyResult = numbers.every((item, index) => item > 2)
console.log(everyResult); // false

let someResult = numbers.some((item, index) => item > 2)
console.log(someResult); // true

let filterResult = numbers.filter((item, index) => item > 2)
console.log(filterResult); //[ 3, 4, 5, 4, 3 ]

let mapResult = numbers.map((item, index) => item * 2)
console.log(mapResult);

