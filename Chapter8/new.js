function _new() {  
    // 创建一个新的空对象
    let obj = {};
    let Con = [].shift.call(arguments);
    // 把心对象的原型绑定到构造函数的原型上
    obj.__proto__ = Con.prototype;
    // 构造函数被执行,执行过程中的this被绑定在新的对象上
    let ret = Con.apply(obj, arguments);
    // 返回这个新的对象
    return ret instanceof Object ? ret : obj
  }