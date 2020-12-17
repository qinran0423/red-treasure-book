console.log(true === 1); // false
console.log({} === {}); // fasle
console.log('2' === 2); // false

console.log(+0 === -0); // true
console.log(+0 === 0); // true
console.log(-0 === 0); // true


console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false

console.log(Object.is(NaN, NaN)); // true



function recursivelyCheckEqual(x, ...rest) {
  return Object.is(x, rest[0]) &&
    (rest.length < 2 || recursivelyCheckEqual(...rest))
}

