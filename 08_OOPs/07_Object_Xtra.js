// can we change the value of Math.PI (3.141592653589793)

console.log(Math.PI); // 3.141592653589793

Math.PI = 4 // Trying to modify the value of Math.PI
console.log(Math.PI); // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

descripter.configurable = true // this allow us to make changes to the property descriptor, that means we can modify enumerable, writable and configuravble properties
descripter.writable = true // now we can change the value
descripter.enumerable = true // now it can be iterable over loops like for-in, for-of
configurable: false 

console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Math.PI = 4 // Now trying to modify the value of Math.PI
console.log(Math.PI); // 3.141592653589793 - its not changing

// Attempting to change the writable attribute of Math.PI to true using Object.getOwnPropertyDescriptor(), still this will not allow us to modify its value as its inherently immutable and just a read-only in JavaScript. We can not ovverride this.



const myObject = {
    number: 1234,
    greet: "Hello!",
    isLoggedIn: true
}

myObject.number = 4321
console.log(Object.getOwnPropertyDescriptor(myObject, 'number')); 
// { value: 4321, writable: true, enumerable: true, configurable: true }

Object.defineProperty(myObject, "number", {
    writable: false, // now we cannot change the value
    enumerable: false, // now it can not be iterable over loops like for-in, for-of
    configurable: false 
})

console.log(Object.getOwnPropertyDescriptor(myObject, 'number')); 
// {
//     value: 4321,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

myObject.number = 1

console.log(myObject.number) // 4321 - did not change

for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`)
}

// greet: Hello
// isLoggedIn: true --> here number: 4321 is missing as it is now not iterable