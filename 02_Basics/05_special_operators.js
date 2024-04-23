// Nullish Coalescing Operator (??): null undefined

// --> The nullish coalescing operator (??) is a feature introduced in JavaScript to provide a concise way to handle nullish values. Nullish values include null and undefined, but not values like 0, '', or false.

const foo = null ?? 'default value';
console.log(foo); // Output: 'default value'

const bar = 0 ?? 'default value';
console.log(bar); // Output: 0

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = null ?? 100 ?? 20;
console.log(val1); // 100

val1 = undefined ?? 100 ?? 20;
console.log(val1); // 100

val1 = 30 ?? 100 ?? 20;
console.log(val1); // 30

val1 = 30 ?? null ?? 20;
console.log(val1); // 30

// ternary operator

let val2;

val2 = (true) ? 20 : 300;
console.log(val2) // 20

val2 = (false) ? 20 : 300;
console.log(val2) // 300

