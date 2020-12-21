class Person{
  // 在原型上定义生成器方法
  *createNicknameIterator() {
    yield 'Jack'
    yield 'Jake'
    yield 'J-Dog'
  }

  // 在类上定义生成器方法
  static *createJogIterator() {
    yield 'Butcher'
    yield 'Baker'
    yield 'Candlestick'
  }
}



let jobIter = Person.createJogIterator()
console.log(jobIter.next().value); // Butcher
console.log(jobIter.next().value); // Baker
console.log(jobIter.next().value); // Candlestick

let p = new Person()
let nicknameIter = p.createNicknameIterator()
console.log(nicknameIter.next().value); // Jack
console.log(nicknameIter.next().value); // Jake
console.log(nicknameIter.next().value); // J-Dog

