let p = Promise.all([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
])


setTimeout(() => {
  console.log(p); // Promise { <pending> }
}, 0);


p.then(() => {
  setTimeout(() => {
    console.log('resolved'); 
  }, 0);
})

// （1s 后）   resolved

let p1 = Promise.all([
  Promise.resolve(3),
  Promise.resolve(),
  Promise.resolve(4)
])

p1.then((values) => setTimeout(() => {
  console.log(values); // [ 3, undefined, 4 ]
}, 0) )



let p2  = Promise.all([
  Promise.resolve(),
  Promise.reject(),
  Promise.resolve()
])

setTimeout(() => {
  console.log(p2); // Promise { <rejected> undefined }
}, 0);



let p3 = Promise.all([
  Promise.reject(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000)  )
])



p3.catch((reason) => setTimeout(() => {
    console.log(reason); // 3
}, 0))

// 解决先发生、超时后的拒绝会被忽略
let r = Promise.race([
  Promise.resolve(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
])


setTimeout(() => {
  console.log('rrr',r); //rrr Promise { 3 }
}, 0);



// 拒绝先发生、超时后的解决被忽略
let r1 = Promise.race([
  Promise.reject(4),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
])

setTimeout(() => {
  console.log('r1', r1); // r1 Promise { <rejected> 4 }
}, 0);



function addTwo(x) {
  return x + 2
}

function addThree(x) {
  return x + 3
}

function addFive(x) {
  return x + 5
}


function compose(...fns) { 
  return (x) => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
}


let addTen = compose(addTwo, addThree, addFive)

addTen(8).then(console.log) // 18