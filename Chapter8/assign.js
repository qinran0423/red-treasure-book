let dest, src, result;


dest = {}
src = {id: 'src'}

result = Object.assign(dest, src)


// Object.assign 修改目标对象
// 返回修改后的目标对象
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(dest); //{ id: 'src' }
console.log(result);//{ id: 'src' }

/**
 * 多个源对象
 */
dest = {}


result = Object.assign(dest, {a: 'foo'}, {b: 'bar'})
console.log(result); //{ a: 'foo', b: 'bar' }

/**
 * 获取函数和设置函数
 */
dest = {
  set a(val) {
    console.log(`设置${val}`);
  }
}

src = {
  get a() {
    console.log('Getter');
    return 'foo'
  }
}


Object.assign(dest, src)
// 调用src的获取方法
// 调用dest的设置方法并传入参数'foo'
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest); // { a: [Setter] }


/**
 * 覆盖属性
 */
dest =  { id: 'dest'}

result = Object.assign(dest, { id: 'src1', a: 'foo' },  {id: 'src2', b: 'bar'})

console.log(result); // { id: 'src2', a: 'foo', b: 'bar' }

// 可以通过目标对象上的设置函数观察到覆盖的过程
dest = {
  set id(x) {
    console.log(x);
  }
}

Object.assign(dest, {id: 'first'}, {id: 'second'}, {id: 'third'})
// first
// second
// third

/**
 * 对象引用
 */

 dest = {}
 src = { a: {}}

 Object.assign(dest, src)

// 浅复制意味着只会复制对象的引用
console.log(dest);// { a: {} }
console.log(dest.a === src.a); // true