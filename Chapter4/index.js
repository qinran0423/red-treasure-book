// 原始值  引用值
// 原始值： 最简单的数据（Undefined, Null, Boolean, Number, String, Symbol）
// 引用值： 多个值构成的对象 (保存在内存中的对象 ) 按引用访问

let person = new Object()
person.name = 'Randy'
console.log(person.name); //Randy

let name = 'Randy'
name.age = 27
console.log(name.age); //undefined




let name1 = 'randy'
let name2 = new String('Mack')
name1.age = 27
name2.age = 26
console.log(name1.age);//undefined
console.log(name2.age); //26
console.log(typeof name1); // string
console.log(typeof name2); // object



let num1 = 5
let num2 = num1

num1 = 6
console.log(num1, num2); // 6 5

let obj1 = new Object()
let obj2 = obj1
obj1.name = 'Randy'
console.log(obj2); //{ name: 'Randy' }