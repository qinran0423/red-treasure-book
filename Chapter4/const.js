// const a; // SyntaxError: 常量声明时没有初始化

const b = 3
console.log(b);
// b = 4 // TypeError: 给常量赋值



const o1 = {}
// o1 = {}// TypeError: 给常量赋值

const o2 = {}
o2.name = 'jake'
console.log(o2); //{ name: 'jake' }


const o3 = Object.freeze({})
o3.name = 'jake'
console.log(o3); // {}