const target = {
  id: 'target',
  foo: 'bar'
}

const handler = {
  //  捕获器在处理程序对象中以方法名为键
  get(){
    return 'handler override'

  }

}

const proxy = new Proxy(target, handler)

// 只有在代理对象上执行这些操作才会触发捕获器， 在目标对象上执行这些操作仍然会产生正常的行为

console.log(target.id); // target
console.log(proxy.id); // handler overrid


target.id = 'foo'
console.log(target.id); // foo
console.log(proxy.id); // handler overrid

proxy.id = 'bar'
console.log(target.id); // bar
console.log(proxy.id); // handler overrid


