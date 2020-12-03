let s1 = "some text"
let s2 = s1.substring(2)
// 1.创建一个String类型的实例；
// 2.调用实例上的特定方法；
// 3.销毁实例
console.log(s1, s2);


let a1 = 'some text'
a1.color = 'red'
console.log(a1.color);

let obj = new Object('some text')
console.log(obj instanceof String); // true


let value = "25"
let number = Number(value)
console.log(typeof number) // number
let obj1 = new Number(value)
console.log(typeof obj1) // object