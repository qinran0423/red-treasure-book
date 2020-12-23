// let p = new Promise((resolve, reject) => setTimeout(resolve(3), 1000))

// p.then((x) => console.log(x))



// async function foo() {
//   console.log(1);
//   return 3
// }

 
// foo().then(console.log)  // 3



async function bar() {
  console.log(2);
  await null;
  console.log(4);
}

console.log(1);
bar()
console.log(3);

// 1
// 2
// 3
// 4