const target = {
  foo: 'bar'
}

const handler = {
  // 目标对象、查询的属性、代理对象
  // get() {
  //   return Reflect.get(...arguments)
  // }
  get: Reflect.get
}


const proxy = new Proxy(target, handler)

console.log(proxy.foo); // bar
console.log(target.foo); // bar




