const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    set color(color) {
        this[CARCOLOR] = color;
    }
    set make(make) {
        this[CARMAKE] = make;
    }
    set model(model) {
        this[CARMODEL] = model;
    }
    get color() {
        return this[CARCOLOR];
    }
    get make() {
        return this[CARMAKE];
    }
    get model() {
        return this[CARMODEL];
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
// myCar.color = `blue`;
console.log(myCar);
myCar.color = 'Black';
myCar.make = 'Jaguar';
myCar.model = 'Land Rover';

console.log(myCar.color);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar);

// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
