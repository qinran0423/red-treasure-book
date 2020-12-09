
// 弱映射中的键只能是Object或者继承自Object的类型

const key1 = {id: 1},
      key2 = {id: 2},
      key3 = {id: 3}

const wm1 = new WeakMap([
  [key1, "val1"],
  [key2, "val2"],
  [key3, "val3"]
])

console.log(wm1.get(key1)); //val1
console.log(wm1.get(key2)); //val2
console.log(wm1.get(key3)); //val3



const wm = new WeakMap()
console.log(wm.has(key1)); //false
console.log(wm.get(key1)); //undefined

wm.set(key1, "Matt")
  .set(key2, "Firsbie")

console.log(wm.has(key1)); // true
console.log(wm.get(key1)); // Matt


wm.delete(key1)
console.log(wm.has(key1)); // false
console.log(wm.has(key2)); // true