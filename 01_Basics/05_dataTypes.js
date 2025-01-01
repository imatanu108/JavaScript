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

// shallow copy
const obj = { a: 1, b: { c: 2 } };
const clone = Object.assign({}, obj);

clone.b.c = 3; // Modifies `obj.b.c` since the copy is shallow
console.log(obj.b.c); // 3

// deep copy
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const nestedObj = { a: 1, b: { c: 2 } };
const clone = deepClone(nestedObj);

clone.b.c = 3; // Does not affect the original object
console.log(nestedObj.b.c); // 2

// obj assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }


// obj freeze
const obj2 = { name: "Alex", age: 22 };

Object.freeze(obj2);

obj2.age = 25; // Ignored in non-strict mode or throws an error in strict mode
obj2.role = "Developer"; // Cannot add new properties
delete obj2.name; // Cannot delete properties

console.log(obj2); // { name: "Alex", age: 22 }

//obj deep freeze
function deepFreeze(object) {
    Object.freeze(object);
  
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === "object" && !Object.isFrozen(object[key])) {
        deepFreeze(object[key]);
      }
    });
  }
  
  const nestedObj2 = { a: { b: 1 } };
  deepFreeze(nestedObj2);
  nestedObj.a.b = 2; // Ignored
  console.log(nestedObj2); // { a: { b: 1 } }
  