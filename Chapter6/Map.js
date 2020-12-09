const m = new Map()

const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3']
])

console.log(m1.size); //3

const m2 = new Map({
  [Symbol.iterator]: function *() {
    yield ['key1', 'val1']
    yield ['key2', 'val2']
    yield ['key3', 'val3']
  }
})
console.log(m2.size) // 3

console.log(m.has('firstName')); // false
console.log(m.get('firstName')); // undefined
console.log(m.size); // 0

m.set("firstName", "matt")
 .set("lastName", "Randy")

console.log(m.has("firstName")); // true
console.log(m.get("firstName")); // matt
console.log(m.size); // 2
m.delete('firstName')

console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // true
console.log(m.size); // 1


m.clear()
console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // false
console.log(m.size); // 0