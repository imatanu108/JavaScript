let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Gouranga-"
let str2 = "Nityanada"
let str3 = str1 + str2
console.log(str3);

// confusing operations (opertor precidence)

console.log("1" + 2); //Output: 12
console.log("1" + "2"); //Output: 12
console.log(1 + "2"); //Output: 12
console.log("1" + 2 + 2); //Output: 122
console.log(1 + 2 + "2"); //Output: 32

console.log(+true); //Output: 1
console.log(+""); //Output: 0

// Increamental Opertor, Prefix and postfix

let a = 5
console.log("a=", a);
let b = a++ //prefix
console.log("b=", b);
console.log("a=", a);
let c = ++a //postfix
console.log("c=", c);
console.log("a=", a);

