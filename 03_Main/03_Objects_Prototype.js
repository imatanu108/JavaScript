// OBJECT CONSTRUCTOR FUNCTION, PROTOTYPE, PROTOTYPE OBJECT (OOPs)
//Before jump into this you should know the basics of functions

// Object Constructor Function (Now a days we use class instead)

// function Car (brand, model, year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.start = function(){
//         console.log(`${this.brand} ${this.model}'s engine is started!`)
//     };
//     this.stop = function(){
//         console.log(`${this.brand} ${this.model}'s engine is stopped!`)
//     };
// }

// Using class for better syntax (gives the same result)
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.brand} ${this.model}'s engine is started!`);
    }
    stop() {
        console.log(`${this.brand} ${this.model}'s engine is stopped!`);
    }
}
// Now craeting Object instances using the constructor function
let car1 = new Car("Toyota", "Fortunar", 2022);
let car2 = new Car("Tata", "Harier", 2021);
console.log(car1.model); // Fortunar
car1.start(); // Toyota Fortunar's engine is started!
car2.stop(); // Tata Harier's engine is stopped!

// PROTOTYPES
// In JavaScript the primary purpose of using prototypes is to share methods among instances created by a constructor function.

Car.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refuled.`)
}
// this refuel() method is now added to the prototype of the Car contructor, so we can access this method by any object(instances) created from this contructor
car1.refuel(); // Toyota Fortunar is refuled.
car2.refuel(); // Tata Harier is refuled.

// Prototype Object
class AppUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
AppUser.prototype.logIn = function() {
    console.log(`${this.name} is logged in successfully.`)
} // adding method to the prototype of the Constructor
let user1 = new AppUser("Hitesh", 27)
let user2 = new AppUser("Anish", 22)
// accessing the prototypr method
user1.logIn(); // Hitesh is logged in successfully.

// Getting the prototype methods of the Constructor
console.log(AppUser.prototype); // { logIn: [Function (anonymous)] }
// Getting the prototype methods of the object instances created from the Constructor
console.log(user1.prototype) // undefined - can't be accessed directly
let user1Prototype = Object.getPrototypeOf(user1)
console.log(user1Prototype); // { logIn: [Function (anonymous)] }

// checking whether the prototype methods are own properties of the objects or not
console.log(user1.hasOwnProperty("logIn")) // false
console.log(user1.hasOwnProperty("name")) // true

// Now adding some methods to the prototype of user 1
user1Prototype.logOut = function(){
    console.log(`${this.name} is logged out successfully.`)
}
console.log(user1Prototype) // { logIn: [Function (anonymous)], logOut: [Function (anonymous)] } - new mwthod added
console.log(AppUser.prototype) // { logIn: [Function (anonymous)], logOut: [Function (anonymous)] } - here this method is also added in the prototype of AppUser Constructor - This is called Prototype Chaining
user1.logOut(); // Hitesh is logged out successfully.
user2.logOut(); // Anish is logged out successfully. (Accessing this method via prototype chaining);
