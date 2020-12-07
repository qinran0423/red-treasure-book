console.log(Array.from("matt"));  //[ 'm', 'a', 't', 't' ]

const m = new Map().set(1,2)
                    .set(3,4)
const s = new Set().add(1)
                    .add(2)
                    .add(3)
                    .add(4)
console.log(Array.from(m)); //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s)); //[ 1, 2, 3, 4 ]


const a1 = [1,2,3,4]
const a2 = Array.from(a1) // 对现有数组执行浅拷贝
console.log(a1 === a2); //false