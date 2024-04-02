// Nullish Coalescing Operator (??): null undefined

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