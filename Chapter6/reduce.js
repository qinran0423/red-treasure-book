// reduce reduceRight 迭代数组所有项， 构建一个最终返回值
let values = [1,2,3,4,5]
let sum = values.reduce((prev, cur, index) => prev + cur)
console.log(sum); // 150