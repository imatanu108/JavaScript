// There are two types of data in Java Script

// Primitive Data Types (Call by value) - 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-Primitive (Reference type) - Array, Object, Function

const number = 12345
const bigNumber = 12435357135176436372n // Here 'n' indicates bigInt
//typeof operator
console.log(typeof(number)) //number
console.log(typeof(bigNumber)) //bigint

// Arrays
const languages = ["Python", "JavaScript", "C++"];

//object
let myObj = {
    name: "Alex",
    age: 22,
    role: undefined,
    isGraduated: false
}

// *********************************************************************************************

// Stack & Heap Memory: Stack used to store primitive data types(call by value), and Heap is for non-primitiev (call by reference)

// Stack Memeory (call by value)

let username = "Alex";
let anotherName = username;
anotherName = "James"; //here user name will still remain "Alex", as username is called by value for anotherName
console.log(anotherName) // James
console.log(username) // Alex

// Heap Memory (call by reference)

const employee = {
    name: "Alex",
    email: "alex@google.com",
    age: 22
}

const newEmployee = employee;
newEmployee.name = "Arun" // name is also changed in employee object as employee object is called by reference in newObject
console.log(employee.name); // Arun
console.log(newEmployee.name); //Arun