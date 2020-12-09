const s1 = new Set(['val1','val2','val3'])
console.log(s1.size); // 3

const s2 = new Set({
  [Symbol.iterator]: function *() {
    yield "val1"
    yield "val2"
    yield "val3"
  }
})

console.log(s2.size); // 3


const s = new Set()

console.log(s.has('Randy'));// false
console.log(s.size); // 0

s.add('Randy')
 .add('Matt')
console.log(s.has('Randy')); //true
console.log(s.size); // 2

console.log(s.delete('Matt')); //true
console.log(s.has('Matt'));// false
console.log(s.has('Randy')); // true
console.log(s.size); // 1
