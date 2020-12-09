const m = new Map()

const functionKey = function () {}
const symbolKey = Symbol()
const objectKey = new Object()

m.set(functionKey, "functionValue")
 .set(symbolKey, "symbolValue")
 .set(objectKey, "objectValue")

console.log(m.get(functionKey)); //functionValue
console.log(m.get(symbolKey)); //symbolValue
console.log(m.get(objectKey)); //objectValue



objectKey.bar = 'bar'
console.log(m.get(objectKey)); // objectValue



const a = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
])

for(let pair of a.entries()) {
  console.log(pair);
}

// [ 'key1', 'val1' ]
// [ 'key2', 'val2' ]
// [ 'key3', 'val3' ]

console.log([...a]); //[ [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] ]


a.forEach((val, key) => console.log(`${key} -> ${val}`))

// key1 -> val1
// key2 -> val2
// key3 -> val3


const m1 = new Map([
  ["key1", "val1"]
])

for(let key of m1.keys()) {
  key = "newKey"
  console.log(key); // newKey
  console.log(m1.get("key1")); //val1
}

const keyObj = {id: 1}

const m2 = new Map([
  [keyObj, "val1"]
])

for (let key of m2.keys()) {
  key.id = "newKey"
  console.log(key); //{ id: 'newKey' }
  console.log(m2.get(key)); //val1
}

console.log(keyObj); // { id: 'newKey' }
