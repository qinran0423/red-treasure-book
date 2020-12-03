let now = new Date()
console.log(now); //2020-12-03T00:02:06.468Z

let someDate = new Date('May 23, 2019')
console.log(someDate); //2019-05-22T16:00:00.000Z

let year = now.getFullYear()
console.log(year); // 2020

let month = now.getMonth() + 1
month = month < 10 ?  '0'+ month : month
console.log(month); // 12

let day = now.getDate()
day = day < 10 ?  '0'+ day : day
console.log(day); // 3

let hour = now.getHours()
hour = hour < 10 ?  '0'+ hour : hour
console.log(hour); 

let minute = now.getMinutes()
minute = minute < 10 ?  '0'+ minute : minute
console.log(`${year}年${month}月${day}日 ${hour}:${minute}`); 

