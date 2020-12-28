// function onResolved(id) {
//   setTimeout(() => {
//     console.log('resolved:' + id);
//   }, 0);
// }


// function onRejected(id) {
//   setTimeout(() => {
//     console.log('rejected:' + id);
//   }, 0);
// }

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// })


// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject()
//   }, 2000);
// })

// p1.then(() => onResolved('p1'), () => onRejected('p1'))
// p2.then(() => onResolved('p2'), () => onRejected('p2'))

let p1 = new Promise(() => {})
let p2 = p1.then()

setTimeout(() => {
  console.log(p1);
}, 0);
setTimeout(() => {
  console.log(p2);
}, 0);
setTimeout(() => {
  console.log(p1 == p2);
}, 0);