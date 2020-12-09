// 函数声明
function sum (num1, num2) {
  return num1 + num2
}

// 函数表达式
let sum1 = function(num1, num2) {
  return num1 + num2
}

// 箭头函数
// ! 箭头函数不能使用arguments、super、new.target，也不能用作构造函数
// ! 箭头函数没有prototype属性
let sum2 = (num1, num2) => {
  return num1 + num2
}


// Function 构造函数
let sum3 = new Function("num1", "num2", "return num1+num2")


console.log(sum(10,10)); // 20

let anotherSum = sum
console.log(anotherSum(10, 10)); //20
sum = null
console.log(anotherSum(10, 10)); //20

function foo () {}
let bar = function() {}
let baz = () => {}

console.log(foo.name); // foo
console.log(bar.name); //bar
console.log(baz.name); //baz
console.log((()=>{}).name); // (空字符)
console.log((new Function()).name); //anonymous

console.log(foo.bind(null).name); //bound foo

let dog = {
  years: 1,
  get age() {
    return this.years
  },
  set age(newAge) {
    this.years = newAge
  }
}

let propertyDesciptor = Object.getOwnPropertyDescriptor(dog, 'age')
console.log(propertyDesciptor.get.name); // get age
console.log(propertyDesciptor.set.name); // set age