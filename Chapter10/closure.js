function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    let value1 = object1[propertyName]
    let value2 = object2[propertyName]

    if(value1 < value2) {
      return -1
    } else if(value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}



let compareName = createComparisonFunction('name')
let result = compareName({name: 'Randy'}, {name:'Matt'})


// 内存泄漏
function assignHandler() {
  let element = document.getElementById('someElement')
  element.onclick = () => console.log(element.id);
}
// 优化
function assignHandler() {
  let element = document.getElementById('someElement')
  let id =  element.id
  element.onclick = () => console.log(element.id);

  element = null
}