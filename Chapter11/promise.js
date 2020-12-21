// 期约 三种状态
// 待定（pending） 兑现（fulfilled） 拒绝（rejected）

// !状态不可逆
let p1 = new Promise((resolve, reject) => resolve())
setTimeout(() => {
  console.log(p1); // Promise {<fulfilled>: undefined}
}, 0);


let p2 = new Promise((resolve, reject) => reject())
setTimeout(() => {
  console.log(p2); //  Promise {<rejected>: undefined}
}, 0);




setTimeout(() => {
  
  console.log(Promise.resolve(3)); // Promise <resolved> : 3
}, 0);


// promise.resolve()可以说是一个幂等方法
let p = Promise.resolve(7)
setTimeout(() => {
  console.log(p === Promise.resolve(p)); // true
  console.log(p === Promise.resolve(Promise.resolve(p))); // true
}, 0);