let stringObject = new String('hello world')

let stringValue = 'hello world'
console.log(stringValue.length); // 11

let message = 'abcde'
console.log(message.charAt(2)); //c

let result = message.concat('fgh')
console.log(result); //abcdefgh
console.log(message); // concat 不改变原始值

console.log(stringValue.slice(3)); // lo world 
console.log(stringValue.substr(3)); // lo world 
console.log(stringValue.substring(3));// lo world 
console.log(stringValue.slice(3,7)); //lo w
console.log(stringValue.substring(3,7));//lo w
console.log(stringValue.substr(3,7)); //lo worl 第二个参数表示返回的字符串数量

console.log(stringValue.slice(3, -2)); //lo wor
console.log(stringValue.substr(3, -2)); // ''
console.log(stringValue.substring(3,-2));// hel
console.log(stringValue);

console.log(stringValue.indexOf('o')); // 4
console.log(stringValue.lastIndexOf('o')); // 7

console.log(stringValue.indexOf('o', 6)) // 7
console.log(stringValue.lastIndexOf('o', 6)); // 4