// Functions in JavaScript

function greet(name) {
    console.log(`Hello, ${name}!`);
} // function with out any return value
greet("ALex") //Hello, ALex!
greet() // Hello, undefined! - as we didn't define any name

function logInMessage(username = "User"){
    return `${username} is logged in succesfully.`
}
console.log(logInMessage("Arjun")); // Arjun is logged in succesfully.
console.log(logInMessage()); // User is logged in succesfully.

function registerId(username) {
    if(!username) // !username is refer to null username, similar to "username === null"
    {
        console.log("Please enter a username!")
    }
    else
    {
        console.log(`${username} registered successfully.`)
    }
}
registerId("Rahul") // Rahul registered successfully.
registerId() // Please enter a username!

function addTwoNumbres(number1, number2) {
    console.log(number1 + number2);
} // number1 and number2 are parameters
console.log(addTwoNumbres) // [Function: addTwoNumbres] - reference of the function
addTwoNumbres(4,5) // 9 - here 4,5 are arguements
addTwoNumbres(5, "4") // 54
addTwoNumbres("4", 5) // 45
addTwoNumbres(5, "a") // 5a
addTwoNumbres(5, null) // 5
addTwoNumbres(5, addTwoNumbres(4,6)) // 10 (for addTwoNumbres(4,6)) and NaN (NOt a Number)

let value = addTwoNumbres(5,6); // 11
console.log(value) // undefined - that is because the function isn't returning anything

function multiplyTwoNums(number1, number2) {
    return number1 * number2
}
let anotherValue = multiplyTwoNums(6,7); 
console.log(anotherValue); // 42
console.log(multiplyTwoNums(4,5)); // 20 
console.log(multiplyTwoNums(4,"a")); // NaN
console.log(multiplyTwoNums(5, multiplyTwoNums(4, multiplyTwoNums(5,3)))); // 300

// whta if a user gives multiple numbers input, then we can handle it like this
// Using Rest operator(...)

function addMultipleNumbers(...num) {
    return num
}
console.log(addMultipleNumbers(10,12,8,16)); // [ 10, 12, 8, 16 ] - show rest operator put all the input numbers into an array

function addMultipleNumFixed(...num) {
    let sum = 0
    for (let i=0; i < num.length; i++) {
        sum = sum + num[i]
    }
    console.log("Sum: ", sum);
}
addMultipleNumFixed(7,8,8,5); // Sum:  28
addMultipleNumFixed(7,8,8,5); // Sum:  28

// Passing an objetc to an Function

const employee1 = {
    fullname: "ALex",
    age: 32
}

function getEmployeeInfo(userObject) {
    console.log(`Name of the employee is ${userObject.fullname}, and age is ${userObject.age} years old.`)
}

getEmployeeInfo(employee1); // Name of the employee is ALex, and age is 32 years old.
getEmployeeInfo({
    fullname: "Rohit",
    age: 29
})
// Name of the employee is Rohit, and age is 29 years old.

// passing an Array to an Function
const array1 = [ 2, 34, 33, 45 ]
function getSecondElement(array) {
    console.log(array[1]);
}
getSecondElement(array1) // 34