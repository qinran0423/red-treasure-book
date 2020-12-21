const target = {
  foo: 'bar'
}

const handler = {
  // 目标对象、查询的属性、代理对象
  get(trapTarget, property, receiver) {
    console.log(trapTarget === target)
    console.log(property);
    console.log(receiver === proxy);
  }
}


const proxy = new Proxy(target, handler)

proxy.foo
// true
// foo
// true


