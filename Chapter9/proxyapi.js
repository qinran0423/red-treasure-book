const myTarget = {}

const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    console.log('get');
    return Reflect.get(...arguments)
  },
  set(target, property, value, receiver) {
    console.log('set');
    return Reflect.set(...arguments)
  },
  has(target, property) {
    console.log('has');
    return Reflect.has(...arguments)
  },
  defineProperty(target, property, descriptor) {
    console.log('defineProperty');
    return Reflect.defineProperty(...arguments)
  },
  getOwnPropertyDescriptor(target, property) {
    console.log('getOwnPropertyDescriptor');
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
})


proxy.foo
// get


proxy.foo = 'bar'
// set

 
'foo' in proxy
//has


Object.defineProperty(proxy, 'foo', {value: 'bar'})
// defineProperty

console.log( Object.getOwnPropertyDescriptor(proxy, 'foo'));
// { value: 'bar', writable: true, enumerable: true, configurable: true } 
// getOwnPropertyDescriptor

console.log(myTarget);
//{ foo: 'bar' }




