// function factorial(num) {
//   if(num <= 1) {
//     return 1
//   } else {
//     return num * factorial(num - 1)
//   }
// }

// let anotherFactorial = factorial
// factorial = null
// console.log(anotherFactorial(4)); // 报错

function factorial(num) {
  if(num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}

let anotherFactorial = factorial
factorial = null
console.log(anotherFactorial(4)); // 24

