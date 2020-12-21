class Vehicle{
  constructor() {
    this.hasEngine = true
  }
  
  identifyPrototype(id) {
    console.log(id, this);
  }


  static identifyClass(id) {
    console.log(id, this);
  }
}

// 继承类
class Bus extends Vehicle{
  constructor() {
    super() //  Vehicle.constructor()

    console.log('suoer', this instanceof  Vehicle);  //suoer true
  }

}


let v = new Vehicle()

let b =  new Bus()

console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

b.identifyPrototype('bus') // bus Bus {}
v.identifyPrototype('vehicle') // vehicle Vehicle {}

Bus.identifyClass('bus') // bus, class Bus {}
Vehicle.identifyClass('vehicle') // vehicle, class Vehicle {}

