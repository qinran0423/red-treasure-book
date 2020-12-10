function outer() {
  inner()
}

// caller : 调用当前函数的函数
function inner() {
  // console.log(inner.caller);
  console.log(arguments.callee.caller);
}

outer()



inner()





function King() {
  if(!new.target) {
    throw 'King must be instantiated using new'
  } 
  console.log('new');
}


new King() // new
King() //Error: King must be instantiated using new

