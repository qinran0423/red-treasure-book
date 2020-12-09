const val1 = {id: 1},
      val2 = {id: 2},
      val3 = {id: 3}
const ws1 = new WeakSet([val1, val2, val3])

console.log(ws1.has(val1)); // true
console.log(ws1.has(val2)); // true
console.log(ws1.has(val3)); // true



const ws = new WeakSet()

console.log(ws.has(val1)); // false

ws.add(val1)
  .add(val2)

console.log(ws.has(val1)); // true
console.log(ws.has(val2)); // true


ws.delete(val1)
console.log(ws.has(val1)); // false
console.log(ws.has(val2)); // true
