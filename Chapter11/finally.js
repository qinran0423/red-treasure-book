// Onfinally 这个处理程序在期约转换为解决或拒绝状态时都会执行。可以避免onResolved onRejected处理程序中出现冗余代码
// let p1 = Promise.resolve()
// let p2 = Promise.reject()

// let Onfinally = function () {
//   setTimeout(() => {
//     console.log('Finally');
//   }, 0);
// }

 
// p1.finally(Onfinally) //Finally
// p2.finally(Onfinally) //Finally

let p1 = new Promise(() => {})
let p2 = p1.finally()

setTimeout(() => {
  console.log(p1); // Promise { <pending> }
}, 0);

setTimeout(() => {
  console.log(p2); // Promise { <pending> }
}, 0);


// 非重入
let synchrionousResolve;
let p = new Promise((resolve) => {
  synchrionousResolve = function () {
    console.log('1 ');
    resolve()
    console.log('2');
  }
})


p.then(() => console.log('4'))
synchrionousResolve()
console.log('3');

// 此例子 即使期约状态变化发生在添加处理程序之后，处理程序也会等到运行的消息队列让它出列是才会执行