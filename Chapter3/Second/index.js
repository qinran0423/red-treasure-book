/**
 *  undefined: 声明了变量但是没有初始值
 *  null: null表示一个空对象指针
 */

// console.log(null == undefined); //true


//! number
/**
 * 数值转换
 * Number parseInt parseFloat
 */
// console.log(Number(false));
// console.log(Number(true));
// console.log(Number(1));
// console.log(Number(null));
// console.log(Number(undefined));
// Number 处理字符串
// console.log(Number('123'));
// console.log(Number('011'));
// console.log(Number('01.1'));
// console.log(Number(''));
// console.log(Number('hello'));


// let obj = {
//   value: 'sss',
//   valueOf() {
//     console.log('valueof');
//     return this.value
//   },
//   toString() {
//     console.log('xxxx');
//     return '2'
//   }
// }

// TODO
// console.log(Number(obj));

// parseInt
console.log(parseInt('')); // NaN
console.log(parseInt('123ww'));
console.log(parseInt('22.3'));


// Symbol: 确保对象属性使用唯一标识符
// 用来创建唯一记号，进而用作非字符串形式的对象属性
let sym = Symbol()
console.log(typeof sym);
