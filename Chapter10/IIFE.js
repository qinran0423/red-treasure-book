var count = 5;

(function() {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }
})()


// console.log(i); //报错

for (let i = 0; i < count; i++) {
  console.log(i);
}