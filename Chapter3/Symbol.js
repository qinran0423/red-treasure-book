let sym = Symbol()
console.log(typeof sym); //symbol

let genericSymbol = Symbol()
let otherGenericSymbol = Symbol()

let fooSymbol = Symbol('foo')
let otherFooSymbol = Symbol('foo')
console.log(genericSymbol == otherGenericSymbol); //false
console.log(fooSymbol == otherFooSymbol ); // false




console.log(genericSymbol); // Symbol()
console.log(fooSymbol); // Symbol(foo)



let fooGlobalSymbol = Symbol.for('foo')
console.log(typeof fooGlobalSymbol); //symbol



let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('baz'),
    s4 = Symbol('qux');

let o = {
  [s1]: 'foo val'
}

// console.log(o); //{ [Symbol(foo)]: 'foo val' }

// Object.defineProperty(o, s2, {value: 'bar val'})
// console.log(o);



