function MyObject() {
  // 私有变量 和 函数
  let privateVariable = 10

  function privateFunction() {
    return false
  }


  // 特权方法
  this.publicMethod = function() {
    privateVariable ++
    return privateFunction()
  }

}



function Person(name) {
  this.getName = function () {
    return name
  }

  this.setName = function(value) {
    name = value
  }
}


let person = new Person('Randy')
console.log(person.getName()); // Randy
person.setName('Greg')
console.log(person.getName()); // Greg



(function() {
  let privateVariable = 10
  function privateFunction() {
    return false
  }

  MyObject = function() {}

  MyObject.prototype.publicMethod = function() {
    privateVariable ++
    return privateFunction()
  }
})()