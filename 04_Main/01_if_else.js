//  If-else statement

if (true) console.log("Executed"); // Executed
if (false) console.log("Executed"); // will not be executed

if (true) {
    console.log("Executed again.")
} // Executed again.

const userIsLoggedIn = true

if (userIsLoggedIn) {
    console.log("User is logged in.")
} else {
    console.log("Log in first.")
} // User is logged in.

if (true && false) {
    console.log("Executed.")
} else {
    console.log("Not Executed.")
} // Not Executed.

if (true || false) {
    console.log("Executed.")
} else {
    console.log("Not Executed.")
} // Executed.

let accountBal = 2000
let withdrawalRequest = 1500

if (withdrawalRequest <= accountBal) {
    console.log("Cash Withdrawal Succesful! Collect the cash.");
} else {
    console.log("Insufficient Balance.");
} // Cash Withdrawal Succesful! Collect the cash.

// Falsy and truthy values in JavaScript

// Falsy values - false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN
// Truthy values - true, 1, "0", 'false', " " 

if(" ") console.log("Case-1"); // Case-1
if("") console.log("Case-2"); // not executed
if("0") console.log("Case-3"); // Case-3
if(1) console.log("Case-4"); // Case-4
if('false') console.log("Case-5"); // Case-5