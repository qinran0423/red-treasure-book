const s = new Set(["val1","val2","val3"])

console.log(s.values === s[Symbol.iterator]); // true
console.log(s.keys === s[Symbol.iterator]); // true

for (const value of s.values()) {
  console.log(value);
}
// val1
// val2
// val3

for (const value of s[Symbol.iterator]()) {
  console.log(value);
}

// val1
// val2
// val3


console.log([...s]); //[ 'val1', 'val2', 'val3' ]


for (const pair of s.entries()) {
  console.log(pair);
}
// [ 'val1', 'val1' ]
// [ 'val2', 'val2' ]
// [ 'val3', 'val3' ]

s.forEach((item, key) => console.log(`${item} -> ${key}`))
// val1 -> val1
// val2 -> val2
// val3 -> val3

