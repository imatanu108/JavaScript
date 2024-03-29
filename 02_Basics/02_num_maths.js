const score = 399
console.log(score);

const balance = new Number(100) // Declaring numbers using Number constructor
console.log(balance);

console.log(balance.toString()); // "100" - convert the number to a string
console.log(balance.toString().length); // 3 - Accessing the string methods

console.log(balance.toFixed(2)); // add decimal points and converts the number into a string

const a = 342.8875
console.log(a.toPrecision(5)); // 342.89
console.log(a.toPrecision(4)); // 342.9
console.log(a.toPrecision(3)); // 343
console.log(a.toPrecision(2)); // 3.4e+2
console.log(a.toPrecision(1)); // 3e+2

const hundred = 10000000
console.log(hundred.toLocaleString()); //1,00,00,000


// *************************** Maths **************************** //

console.log(Math); // Object [Math] {}

console.log(Math.abs(-7)) // 7 - convert into absolute positive value
console.log(Math.abs(55)) // 55

console.log(Math.round(4.667)) // 5 - returns the closest round value
console.log(Math.round(-4.467)) // -4

console.log(Math.ceil(4.667)) // 5 - returns the next round value
console.log(Math.floor(4.667)) // 4 - returns the previous round value

console.log(Math.min(2,4,55,6)) // 2 - returns the minimum value
console.log(Math.max(2,4,55,6)) // 55 - returns the maximum value

console.log(Math.random()) // returns  a number between 0 to 1
console.log(Math.floor(((Math.random()*10) + 1))) // returns  a number between 1 to 10

const min = 11
const max = 30

console.log(Math.floor((Math.random()*(max-min+1))+min)) // give output between min to max

