
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this.strength += 5;
    }
    get name() {
        console.log("get name");
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}

const CITY = Symbol();
const STATE = Symbol();
class Human extends superhero {
    constructor(healthpoints, city, state, ...superherostuff) {
        super(...superherostuff);
        this._healthpoints = healthpoints;
        this[CITY] = city;
        this[STATE] = state;
    }
    set name(name) {
        this._name = name;
    }

    //1. implement a custom function which will add "Mr" to name property in subclass
    addMr() {
        this._name = `Mr.${this._name}`;
    }

    //2. implement a method in subclass which will increment the power by 2
    incrementPower() {
        this._strength += 2;
    }

    //3. implement a method in subclass to reduce the power by half
    reducePower() {
        this._strength /= 2;
    }
}
const details = [20, "Hyderabad", "Telanagana", "Bill", 10, 8]
const hero3 = new Human(...details);
console.log(hero3);
// hero3.name = "Sai";
hero3.addMr();
console.log("After adding Mr. ")
console.log(hero3._name)
hero3.incrementPower();
console.log("After incrementing the strength by 2 ");
console.log(hero3._strength)
hero3.reducePower();
console.log("After decrementing the strength by 2 ");
console.log(hero3._strength)
console.log("Final Object");
console.log(hero3);
// const hero4 = new superhero(20, "abc", 8);
// console.log(hero4);
