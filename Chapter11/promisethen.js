function onResolved(id) {
  setTimeout(() => {
    console.log('resolved', id);
  }, 0);
}



function onRejected(id) {
  setTimeout(() => {
    console.log('rejected', id);
  }, 0);
}


let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000))
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000))


p1.then(() => onResolved('p1'), () => onRejected('p1'))
p2.then(() => onResolved('p2'), () => onRejected('p2'))

// 3s后   
// resolved p1
// rejected p2



let a1 = Promise.resolve('foo')
let a2 = a1.then()

setTimeout(() => {
  console.log(a2); // Promise <resolve>: foo
}, 0);


// 这些都是一样的
let a3 = a1.then(()=> undefined)
let a4 = a1.then(() => {})
let a5 = a1.then(() => Promise.resolve())

setTimeout(() => {
  console.log(a3); // Promise <resolve>: undefined
}, 0);
setTimeout(() => {
  console.log(a4); // Promise <resolve>: undefined
}, 0);
setTimeout(() => {
  console.log(a5); // Promise <resolve>: undefined
}, 0);


let b1 = Promise.reject('foo')

let b2 = b1.then()


setTimeout(() => {
  console.log(b1);  //Promise { <rejected> 'foo' }
}, 0); 

let b3 = b1.then(null, () => undefined)
let b4 = b1.catch()

setTimeout(() => {
  console.log('xxx',b3); // xxx Promise { undefined }
  console.log('ccc',b4); // ccc Promise { <rejected> 'foo' }
}, 0);

