function sayHi(name, message) {
  console.log(Array.prototype.slice.call(arguments));
  console.log("hello "+ name + ", " + message);
}

function sayHi1() {
  console.log("hello "+ arguments[0] + ", " + arguments[1]);
}

sayHi('randy', 'niu')

let values = [1,2,3,4]
function getSum() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(getSum.apply(null, values)); // 10
console.log(getSum(...values)); // 10


