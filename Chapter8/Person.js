function Person() {
    
}


let friend = new Person()

Person.prototype = {
  constructor: Person,
  name: 'Randy',
  age: 18,
  sayName() {
    console.log(this.name);
  }  
}

// friend.sayName() //错误


// 原生对象原型

console.log(typeof Array.prototype.sort); // function
console.log(typeof String.prototype.substring); // function



// 原生的问题
// ! 弱化了向构造函数传递初始化参数的能力， 会导致所有实例默认都取得相同的属性值
// ! 主要问题源自它的共享性


function Child() {
  
}



Child.prototype = {
  constructor: Child,
  name: 'randy',
  age: 17,
  friends:['shelby', 'court'],
  sayName() {
    console.log(this.name);
  }
}

let child1 = new Child()
let child2 = new Child()

child1.friends.push('Van')

console.log(child1.friends); //[ 'shelby', 'court', 'Van' ]
console.log(child2.friends); //[ 'shelby', 'court', 'Van' ]
console.log(child1.friends ===child2.friends ); // true
