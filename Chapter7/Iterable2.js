// 可迭代对象
let arr = ['foo', 'bar']

// 迭代器工厂函数
console.log(arr[Symbol.iterator]); // [Function: values]

// 迭代器
let iter = arr[Symbol.iterator]()
console.log(iter); // Object [Array Iterator] {}

console.log(iter.next()); //{ value: 'foo', done: false }
console.log(iter.next()); //{ value: 'bar', done: false }
console.log(iter.next()); //{ value: undefined, done: true }

// 不同迭代器的实例相互之间没有联系，只会独立的遍历可迭代对象
let arr1 = ['foo', 'bar']
let iter1 = arr[Symbol.iterator]()
let iter2 = arr[Symbol.iterator]()

console.log(iter1.next());//{ value: 'foo', done: false }
console.log(iter2.next());//{ value: 'foo', done: false }
console.log(iter2.next());//{ value: 'bar', done: false }
console.log(iter1.next());//{ value: 'bar', done: false }

// 这个类实现了可迭代接口（Iterable）
class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return {done: false, value: 'foo'}
      }
    }
  }
}


let f = new Foo()

// 迭代器接口的对象
console.log(f[Symbol.iterator]()); //{ next: [Function: next] }



let a = new Array()

console.log(a[Symbol.iterator]()); //Object [Array Iterator] {}