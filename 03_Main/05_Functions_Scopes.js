// FUNCTION SPECIAL METHODS & SCOPES IN FUNCTION

add(5,6) // 11 - We can invoke a function before defining it
function add(a,b) {
    console.log(a + b);
}
add(3,6) // 9

// But declaring a function as variable

// addTwoNum(5,9) - We can't do that, Cannot access 'addTwoNum' before initialization as its a variable
const addTwoNum = function (a,b) {
    console.log(a + b);
}
addTwoNum(5,9) // 14
var x = 50 // global x
console.log(x) // 50

function one() {
    const a = 23
    console.log(x) // 50
    function two() {
        let b = 20
        console.log("a inside two: ", a); // a inside two:  23
        console.log("b inside two: ", b); // b inside two:  20
        console.log("x inside two: ", x); // x inside two:  50 (global x) - as no local x declared
    }
    two()
    // console.log("b outside two: ", b); - b can not be accessed here
    x = 30 // local x
    var three = function (){
        console.log("a inside three: ", a); // a inside three:  23
        console.log("x inside three: ", x); // x inside three:  30 (local x) - as an local x declared
    }
    three()
}
one()
// two() - can not be executed outside be
// three() - ReferenceError: three is not defined
console.log(x) // 30 (value of x changed as value of x is reassigned inside one())

// ARROW FUNCTION

const sumNum = (a,b) => {
    console.log(a+b);
}

sumNum(3,8) // 11

const arrFunc = () => {
    return "I'm an arrow function." // Implicit Return
}
console.log(arrFunc()); // I'm an arrow function.

// we can directly return a value in this way also...
const arrFunc2 = () => ("I'm another arrow function.") // Explicit Return
console.log(arrFunc2()); // I'm another arrow function.

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

function basicFunc() {
    console.log("DATA-BASE CONNECTED-1!");
}
// we invoke a function like this:
basicFunc(); // Here 'instantFunc' is the function refference and () is the invocation
// here ";" is very much important after basicFunc() - beacause inbetween two differnt code lines ();() there must be a semicolon
// similarly we can immaediately invoke a function like this

(function instantFunc(){
    console.log("DATA-BASE CONNECTED-2!");
})(); // DATA-BASE CONNECTED-2!
// instantFunc() - !instantFunc is not defined in the global scope

// short methods for iife
(()=>{
    console.log("DATA-BASE CONNECTED-3!");
})(); // DATA-BASE CONNECTED-3!

(function(){
    console.log("DATA-BASE CONNECTED-4!");
})(); // DATA-BASE CONNECTED-4!

// iife with parameters
((name) => {
    console.log(`Hello, ${name}!`);
})("Alex"); // Hello, Alex!