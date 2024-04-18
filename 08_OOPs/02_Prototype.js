// More on 'new' and 'this' keyword, prototypes

// In JavaScript everthing(String, Array, Functions) is reffered to an Object, so actually we can treat them as objects and use the methods and properties of objects if possible

// Try to treating an Function as an Object

function multiplyBy5 (num){
    return num*5
}

// lets adding a property into this function like we do in an Object so we can check the behavior of the function as an Object

multiplyBy5.power = 2

console.log(multiplyBy5(7)); // 35
console.log(multiplyBy5.power); // 2 - we are getting output 2, that does mean its actually working like an Object

// actually the main reason behind this is the prototype of the Object is directly link to Strings, Array and Function like a parents prototype so we can access the prototype methods and properties of the Object via strings, arrays and functions.

// (Strings, Arrays, Functions) --> Object --> null (Prototypal inheritance in JavaScript) : By this chain we can understand that if we try to access a method in Strings, Arrays or Functions which is directly not available in Strings, Arrays or Functions methods, it will look for this method into their Parents Prototype (i.e. Object)

console.log(multiplyBy5.prototype); // {} - Here by default some contexts(properties and methods) are set to this prototype [Check in Browser for get the methods], some methods are set from its parent's prototype

function Item (name, price) {
    this.name = name;
    this.price = price;
}

// accessing its prototype and adding some methods
Item.prototype.getPrice = function (){
    console.log(`The price of ${this.name} is ${this.price} Rupees.`)
}
Item.prototype.increasePrice = function (increament){
    this.price = this.price + increament;
}

// Now creating some instances and accessing the prototype methods
const iPhone15 = new Item('iPhone 15', 99999)

iPhone15.getPrice(); // The price of iPhone 15 is 99999 Rupees.
iPhone15.increasePrice(1000);
iPhone15.getPrice(); // The price of iPhone 15 is 99999 Rupees.


// Advanced Prototypes
// lets add some methods to the prototype of the Global Object, and try to access them in Strings, Arrays and Functions

Object.prototype.sayHello = function (){
    console.log("Hello!");
}
const myString = ""
const myArray = []
function myFunction (){}

myString.sayHello(); // Hello!
myArray.sayHello(); // Hello!
myFunction.sayHello(); // Hello!

const str1 = "Hello       "
const str2 = "How are you?       "
console.log(str1.length) // 12

// lets create a method for all the strings that will return the true length of the string

String.prototype.trueLength = function (){
    console.log(this) // here this will refer to the string value
    console.log(`True Length: ${this.trim().length}`)
}

str1.trueLength();
// [String: 'Hello       ']
// True Length: 5
"Hello".trueLength(); 
// [String: 'Hello']
// True Length: 5


//  lets adding a method to the prototype the Global Array and try to accesses them in Strings and Functions 

Array.prototype.sayBye = function (){
    console.log("Bye!!!")
}

myArray.sayBye() // Bye!!!
// myString.sayBye() - This will throw an error, we can't access the prototype of Array from Strings

console.log(Object.prototype) // [Object: null prototype] { sayHello: [Function (anonymous)] }
console.log(String.prototype) // { trueLength: [Function (anonymous)] }
console.log(Array.prototype) // Object(0) [ sayBye: [Function (anonymous)] ]

// lets do something to access the prototype of one object, strings, arrays and functions to another object, strings and arrays an dfunctions

const myObject1 = {
    name: "Virat",
    age: 36,
    greet: function (username){
        console.log(`Hello ${username}.`)
    }

}
const myObject2 = {
    email: "mail@google.com",
    __proto__: myObject1 // Sharing the properties and methods of myObject1 to myObject2, Now myObject2 can access all the properties and methods of myObject1
}

// we can also do this syntaxes also to set the prototype
myObject2.__proto__ = myObject1
//Modern Syntax
Object.setPrototypeOf(myObject2, myObject1)

myObject1.greet("Alex"); // Hello Alex.
myObject2.greet("Rahul"); // Hello Rahul. -- accessing method of myObject1
console.log(myObject2.age) // 36 -- accessing properties of myObject2
console.log(myObject1.email) // undefined - but we can't access the properties and methods of myObject2 in myObject1