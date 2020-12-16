let num = 1;
let obj = { 'a': 1 };

// 没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined

let str = 'abc'
let arr = ['a','b','c']
let map = new Map().set('a', 1).set('b', 2).set('c', 3)
let set = new Set().add('a').add('b').add('c')

// 实现了迭代器工厂函数
console.log(str[Symbol.iterator]); //[Function: [Symbol.iterator]]
console.log(arr[Symbol.iterator]); //[Function:  values]
console.log(map[Symbol.iterator]); //[Function:  entries]
console.log(set[Symbol.iterator]); //[Function:  values]


console.log(str[Symbol.iterator]()); //[Function: [Symbol.iterator]]
console.log(arr[Symbol.iterator]()); //[Function:  values]
console.log(map[Symbol.iterator]()); //[Function:  entries]
console.log(set[Symbol.iterator]()); //[Function:  values]



