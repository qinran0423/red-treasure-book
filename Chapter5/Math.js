console.log(Math.max(2,34,45,3)); // 45
console.log(Math.min(2,34,45,3)); // 2

let values = [1,2,3,4,5,6,7,8]
console.log(Math.max(...values)); //8

// 舍入方法
console.log(Math.ceil(25.1)); //26
console.log(Math.floor(24.9)); //24
console.log(Math.round(24.4));// 24
console.log(Math.fround(0.4)); //0.4000000059604645


let num = Math.random()
console.log(num);
let num1 = Math.floor(Math.random()*10 + 1)
console.log(num1);
