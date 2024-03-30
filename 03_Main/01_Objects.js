// Objects
// singleton - when we create an object using Object Constructor
// Object literals

const User = {
    name: "Alex", // by default the data type of the keys are strings
    age: 21,
    location: "India",
    email: "alex@google.com",
    isLoggedIn: false,
    mostActiveDays: ["Sunday", "Saturday"],
    "current level" : 45 // defining the data type seperately
}

console.log(User.email); // alex@google.com - this is not the write method to access. if we define the data type of the key seperately then this method will not work
console.log(User["email"]) // alex@google.com - better syntax for all type of datas of the key
console.log(User["current level"]) // 45
// console.log(User."current level") - syntax error

User.email = "alex@microsoft.com" // modifying the values of the object
console.log(User["email"]) // alex@microsoft.com

// Object.freez method

Object.freeze(User) // locks the User object, so we can't change the values
User.location = "USA"
console.log(User["location"]) // India - location didn't changed

const mySymbol1 = Symbol("Key1")
const mySymbol2 = Symbol("Key2")

const Model = {
    mySymbol1: "myKey1", // wrong syntax to difine a symbol
    [mySymbol2]: "myKey2" // right syntax to define a symbol
}

console.log(Model.mySymbol1) // myKey1  
console.log(typeof Model.mySymbol1) // string - not a symbol  
console.log(Model[mySymbol2]) // myKey2 - right syntax 
console.log(Model) // { mySymbol1: 'myKey1', [Symbol(Key2)]: 'myKey2' }

const newUser = {
    name: "James"
}

// adding functions

newUser.greetings = function(){
    console.log(`Hello, ${this.name}!`)
}

console.log(newUser.greetings) // [Function (anonymous)] - wrong syntax for functions
// When you log newUser.greetings without parentheses () after the function name, you are not invoking the function, but rather referencing the function itself.

console.log(newUser.greetings()) // Hello, James! + 'undefined'
// The undefined at the end of the output is because the greetings function itself doesn't return any value explicitly. When a function in JavaScript doesn't have a return statement or it explicitly returns undefined, JavaScript returns undefined by default.

newUser.greetings() // Hello, James!

// Other methods to avoid this 'undefined': we should return the (`Hello, ${this.name}!`) not console.log

newUser.greetUser = function(){
    return (`Hello, ${this.name}!`)
}
console.log(newUser.greetUser()) // Hello, James!