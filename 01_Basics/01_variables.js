const accountId = 87383
let accountEmail = "xyz@google.com"
var accountPassword = "12345"
// accountCity = "Delhi" // though we can initialize a variable without using let, var, or const but we should not do that
let accountName;

// modefying the values
accountEmail = "abc@gmail.com"
console.log(accountEmail)
console.log(accountName) // undefined

console.table([accountId, accountEmail, accountPassword])

// Data types

console.log(typeof accountId)
console.log(typeof "Gour-Nitai")
console.log(typeof undefined) //undefined
console.log(typeof "Gour-Nitai") //string
console.log(typeof null) //object