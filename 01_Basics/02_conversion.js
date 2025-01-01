let num = 456
console.log(typeof num) //number

let str = "33"
let newNum = Number(str)
console.log(typeof str) // string
console.log(typeof newNum) // number

let mixNum = "33xyz"
let convertedNum = Number(mixNum)
console.log(convertedNum) // NaN
console.log(typeof convertedNum) // the type has become number but the value is NaN(Not a Number) as "33xyz" can not be converted into Number

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn) // true for 1 (false for O)
console.log(typeof boolIsLoggedIn) // boolean

isLoggedIn = 1556 // "Name"
console.log(boolIsLoggedIn) // true

console.log("5" - 1); // 4 (string "5" is coerced to number)
console.log("5" + 1); // "51" (number 1 is coerced to string)
console.log(true + 1); // 2 (true coerced to 1)
console.log(null + 1); // 1 (null coerced to 0)
console.log(undefined + 1); // NaN (undefined cannot be coerced to a number)
console.log(0 == ""); // true (coercion happens)
console.log(0 === ""); // false (strict comparison, no coercion)
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
