var name = 'jake'

// 等价于
var name
name = 'jake'



function fn1() {
  var name = 'jake'
}
// 等价于
function fn2() {
  var name
  name = 'jake'
}


console.log(name1); //undefined
var name1 = 'jake'


function fn() {
  console.log(name2); // undefined
  var name2 = 'jake'
}

fn()


for(var i = 0; i < 10; i++ ) {}
console.log(i); // 10

for(let j = 0; j < 10; j++){}
console.log(j); // ReferenceError: j is not defined