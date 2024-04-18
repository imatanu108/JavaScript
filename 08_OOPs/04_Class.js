// class is introduced after ES6

// class syntax, inheritance, static method

// In JavaScript Class is just syntactic sugar, behind the scences everything works with Objects, constructor function, this, new .call() etc

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `abc${this.password}xyz`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// creating instances

const user1 = new User("Alex", "alex@microsoft.com", "123")
console.log(user1.encryptPassword); // [Function: encryptPassword] -refernce to the function
console.log(user1.encryptPassword()); // abc123xyz
console.log(user1.changeUsername); // [Function: changeUsername]
console.log(user1.changeUsername()); // ALEX


// Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound(){
        return `${this.name} is making sound.`
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }

    bark(){
        return `${this.name} is barking.`
    }
}

// creating instances from Dog class

const myDog = new Dog('Tiger', 'Bull-Dog')

// accesing own methods
console.log(myDog.bark()) // Tiger is barking.

// accesing inheritated method from the parent(i.e Animal Class)
console.log(myDog.makeSound()) // Tiger is making sound.

// some checkings

console.log(myDog === Dog); // false
console.log(Dog === Animal); // false
console.log(myDog instanceof Dog); // true
console.log(Dog instanceof Animal); // false
console.log(myDog instanceof Animal); // true

// Static Method
// sometimes, we don't want some methods of the Parent Class to be get accessed by the instances and child-classes, in that case we use static method

class Vehicle {
    constructor(){}
    
    startEngine() {
        console.log("Engine Started!")
    }

    static refuel() {
        console.log("The vehicle is refueled.")
    }
}

class Car extends Vehicle {
    constructor (brand, model, year){
        super(); // We have to call super constructor befor ussing this, even there is no parameters defined in the parent class
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        console.log(`This is ${this.brand} ${this.model} of ${this.year}`)
    }
}

const myCar = new Car("Toyota", "Fortunar", 2021)
myCar.getInfo() // This is Toyota Fortunar of 2021
myCar.startEngine() // Engine Started!
// myCar.refuel() --> can't access this because of restrictions by static keyword