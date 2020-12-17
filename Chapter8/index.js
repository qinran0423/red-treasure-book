// let person = new Object()
// person.name = 'randy'
// person.age = 18
// person.job = '程序员'
// person.say = function () {
//   console.log(this.name);
// }


let person = {
  name: 'randy',
  age: 18,
  job: '程序员',
  say() {
    this.name
  }
}

//! 属性类型
// 数据属性 Configurale Enumberable Writeable Value
// 修改属性的默认特性,则必须使用Object.defineProperty()方法
let person1 = {}
Object.defineProperty(person1, 'name', {
  writable: false,
  value: 'randy',
  configurable: false
})

console.log(person1.name); // randy
person1.name = 'Mack'
console.log(person1.name); // randy

delete person1.name
console.log(person1.name); // randy

// 访问器属性 Configurale Enumberable Get Set
let book = {
  year_: 2017,
  edition: 1
}


Object.defineProperty(book, 'year', {
  get() {
    return this.year_
  },
  set(newvalue) {
    if(newvalue > 2017) {
      this.year_ = newvalue
      this.edition += newvalue - 2017
    }
  }
})
// book.year = 2018
// console.log(book.edition); // 2

let book1 = {}
Object.defineProperties(book1, {
  year_: {
    value: 2017
  },

  edition: {
    value: 1,
    writable: true
  },
  year: {
    get() {
      return this.year_
    },
    set(newvalue) {
      console.log(newvalue, this.edition);
      if(newvalue > 2017) {
        this.year_ = newvalue
        this.edition += newvalue - 2017
        console.log(this.edition);
      }
    }
  },

})
console.log(book1.edition); // 2
book1.year = 2018
console.log(book1.edition); // 2

let descriptor = Object.getOwnPropertyDescriptor(book1, 'year')
console.log(descriptor);
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: false,
//   configurable: false
// }

