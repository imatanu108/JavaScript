// Lexical Scoping and Closures

// Lexical scope means a variable defined outside of a function are accessible anywhere within that file oe block of code, while variables defined with in that function are only accessible within that function.

function parent() {
    let name = "alex";
    function child() {
        console.log(name); // name variable will be accessible inside child function
    }
    child();
}
parent(); // alex

// Closures

function greet(){
    let name = "Rohit"
    function letsGreet(){
        console.log(`Hello. ${name}!`)
    }
    return letsGreet // returning instead invoking.
}

const storeGreet = greet();
storeGreet(); // Hello. Rohit! - This output isn't normal.
/* Heres Why 

--> In the previous example we were invoking the child fanctions directly inside the parent function, now imagine the call stack situation, 

--> when the parent function was invoked it goes to the call stack with all its arguements and variables, then inside its it invokes the child function, so the child function can access the name variable of the parent function, as its execution context (execution context of the parent function) is still there in call stack, so we get the desired output i.e. alex

--> But in the second case we are actually returing the letsGreet() instead of invoking it inside the greet function, Now imagine the situation here,

--> when we assign the greet() to storeGreet, we get letsGreet functions reference as return, but the problem is at that time the greet() is already exectued and its execution context is now removed from the call stack,

--> And now we are invoking the storeGreet() [reference of letsGreet()], so shoul not have any access to the variables declared inside the greet() as its execution context is already out of the call stack, so we should get output "Hello, undefined!"

--> But shockingly we get the output "Hello. Rohit!", but how is this possible as greet()'s execution context including all arguments, parameters and variables are out of the execution context,

--> Acutally this is happening due to "Closures", the main thing is whenever we return the child function inside the parent function (here letsGreet), its doesn't only return with its implicit defination, its accutally return with all its lexical scope inside of the parent function(here greet()) i.e. with all the arguements and declared variables inside the parent funtion, so it itself have the access to the variables of the parent.

--> what we thing it returns
    {
        console.log(`Hello. ${name}!`)
    }
--> what acually it returns(with lexical scope)

    let name = "Rohit"
    function letsGreet(){
        console.log(`Hello. ${name}!`)
    }

    */
