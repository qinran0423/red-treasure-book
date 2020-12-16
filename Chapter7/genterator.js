function* generatorFn() {
  
}

// 产生一个生成器对象
const g = generatorFn()

console.log(g); //Object [Generator] {}
console.log(g.next); //[Function: next]

console.log(g.next()); //{ value: undefined, done: true }



function* generatorFn1() {
  yield
}


let generatorObject = generatorFn1()


console.log(generatorObject.next()); //{ value: undefined, done: false }
console.log(generatorObject.next()); //{ value: undefined, done: true }



function* generatorFn2() {
  yield 'foo'
  yield 'bar'
  return 'baz'
}


let generatorObject1 = generatorFn2()


console.log(generatorObject1.next()); //{ value: 'foo', done: false }
console.log(generatorObject1.next()); //{ value: 'bar', done: false }
console.log(generatorObject1.next()); //{ value: 'baz', done: true }



function * generatorFn3(params) {
    console.log(params);
    console.log(yield);
    console.log(yield);
}


let generatorObject2 = generatorFn3('foo')
generatorObject2.next('bar') // foo
generatorObject2.next('baz') // baz
generatorObject2.next('qux') // qux


function * generatorFn() {
  yield * [1,2,3]
}
let generatorObject = generatorFn()



for (const x of generatorObject) {
  console.log(x);
}
// 1
// 2
// 3




