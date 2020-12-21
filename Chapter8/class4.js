class Vehicle {
  constructor() {
    console.log(new.target);
    if(new.target === Vehicle) {
      throw new Error('vehicle cannot be directly instantiated')
    }
  }
}


class Bus extends Vehicle{}

new Bus()
new Vehicle()