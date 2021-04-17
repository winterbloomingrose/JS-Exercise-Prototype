/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
  function Person(name, age) {
      this.name = name;
      this.age = age;
      this.stomach = [];
      Person.prototype.eat = function (food) {
        if (this.stomach.length<10){
          this.stomach.push(food);
        } 
        else {
          return this.stomach
        }
      }
      Person.prototype.poop = function () {
        this.stomach.length=0;
      }
      Person.prototype.toString = function () {
        return `${this.name},${this.age}`
      }
    }
  
    const homoSapien = new Person("Entity", 0);
    /* feeding - i gotta find a more efficient way to do this */
      homoSapien.eat('apple');
      homoSapien.eat('butter');
      homoSapien.eat('crepe');
      homoSapien.eat('donut');
      homoSapien.eat('eclair');
      homoSapien.eat('french fries');
      homoSapien.eat('gelato');
      homoSapien.eat('hot dog');
      homoSapien.eat('ice cream');
      homoSapien.eat('jerky');
      /* test: will not print bc stomach is full */ homoSapien.eat('kool aid'); 
    console.log(homoSapien);

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    Car.prototype.fill = function (gallons) {
        this.tank = this.tank + gallons;
        return this.tank;
      }
    Car.prototype.drive = function (distance) {
      const maxDistance = this.tank * milesPerGallon;
      this.tank = this.tank - (distance / milesPerGallon);
      if (this.tank <= 0) {
        this.odometer = this.odometer + maxDistance;
        return `I ran out of fuel at ${this.odometer} miles on a ${distance} mile trip!`
      }
      else {
        this.odometer = this.odometer + distance;
        return `My odometer reads ${this.odometer} miles, and there is ${this.tank} gallons of gas left in me!`
      }
    }
  }
  /* i think there should be a way to do the run out of fuel w a for loop but eh */ 

  const lightningMcQueen = new Car("sapient", 20)
  console.log(lightningMcQueen.fill(20)) /* it can drive 400 miles */
  console.log(lightningMcQueen.drive(200)) /* using some gas*/
  console.log(lightningMcQueen.drive(500)) /* using all gas*/

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
    Baby.prototype = Object.create(Person.prototype)
    Baby.prototype.play = function(favoriteToy) {
      return `Playing with ${this.favoriteToy}`;
    }
  }
 
  const spawnling =  new Baby("spawn", 3, "barbed wire");
  console.log(spawnling);
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
      'this' references the object executing the current function
      
      1. window binding: the "this" keyword is forced to be the child of the window/global scope. there is nothing "closer" for it to bind to and it is outside any particular object.
      2. implicit binding: it is inside of a specific declared object. it binds to this object. 
      3. 'new' binding: it binds to a 'new'ly constructed constant variable  that is created with a constructor function. 'new' directs 'this' to the newly created object.
      4. explicit binding: using 'call' 'bind' or 'apply' to point 'this' to a certain value.

      references for myself: https://alligator.io/js/this-keyword/ , https://www.youtube.com/watch?v=gvicrj31JOM 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}