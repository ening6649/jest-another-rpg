const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });

//  Constructor functions act like blueprints for objects. Because they don't have a return statement, 
// they return undefined by default. However, unlike a regular function, 
// they are meant to be used in conjunction with the new keyword.
// the function that's called to create a new object is a constructor function. i.e. new Date() new Potion above 
// the below is another type of constructor fucntion
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
const car = new Car('Honda', 'Civic');
    console.log(car);
// if name is true , then this.name = name , otherwise this.name = this.type...
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

// the below sets a default empty string if no name is provided
// function Player(name = '') {

// prototype only create the method once on the constructor itself. more 10.2.7
// Because of this chain, you can call player.toString() even though you didn't explicitly define a toString() method anywhere.
//  It was inherited from Object two levels up. In JavaScript, this is known as the prototype chain
// more 10.2.7 video
Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
      
      Player.prototype.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
      };

// The .splice() method removes items from an array and returns the removed item(s) as a new array.

// below is an example of a new object inheriting methods
const diane = {
    name: 'Diane',
    sayHello: function() {
      console.log('hello');
    }
  };
  
  const obj = Object.create(diane);
  
  // prints '{}' because this object has no direct properties
  console.log(obj);
  
  // still works because obj inherited this method from diane
  obj.sayHello();

//   array destructuring
const [first, second] = ['first item', 'second item'];

// rest operator
const {name, ...details} = {name: 'Diane', occupation: 'Developer', location: 'USA'};

// asynchronous promises
new Promise((resolve, reject) => {
 setTimeout(() => {
   resolve('success');
 }, 2000);
});

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    honk() {
      console.log('beep beep');
    }
  }
  
  // car objects are still created and used the same way
  const car = new Car('Honda', 'Civic');
  car.honk();

//   same as the below
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.honk = function() {
    console.log('beep bee');
  };
  
  const car = new Car('Honda', 'Civic');
  car.honk();

//   no hoisting in ES 6
// Uncaught ReferenceError: Cannot access 'Car' before initialization
const car = new Car('Honda', 'Civic');

class Car {
 constructor(make, model) {
   this.make = make;
   this.model = model;
 }
}

// The super keyword is how we can reference the parent object. 
// In a constructor(), calling super() will call the constructor() of the parent.