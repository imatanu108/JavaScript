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