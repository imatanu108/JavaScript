// Dates

let myDate = new Date() // Creating a date with Date Object constructor
console.log(myDate); // 2024-03-29T10:41:37.001Z (General date Format)
console.log(typeof myDate); // Objetc
console.log(typeof Date); // function - Date Constructor Function creates a date object

// Date methods
console.log(myDate.toString()); // Fri Mar 29 2024 16:15:37 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 29/3/2024, 4:17:00 pm
console.log(myDate.toDateString()); // Fri Mar 29 2024
console.log(myDate.toLocaleDateString()); // 29/3/2024
console.log(myDate.toTimeString()); // 16:17:31 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString()); // 4:17:59 pm

// Creating a new Date
let myCreatedDate = new Date(2024, 0, 23) // months starts with index 0(Jan), 1(Feb), 2(March),...
console.log(myCreatedDate.toDateString()); // Tue Jan 23 2024
console.log(myCreatedDate); // 2024-01-22T18:30:00.000Z (General Format)
let anotherDate = new Date("01-24-2024") // When we define a date in this string format, the months are not indexed, so 1(Jan), 2(Feb), 3(March),...
console.log(anotherDate.toDateString()); // Wed Jan 24 2024
console.log(anotherDate.getDate()) // 24
console.log(anotherDate.getDay()) // 3 - Here days are indexed, '3' goes for Wed. '0' for Sunday, '1' for Monday
console.log(anotherDate.getFullYear()) //2024
// Time stamps

let myTimeStamp = Date.now() //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(myTimeStamp) //1711711884453 (in milliseconds)
//converting in seconds
console.log(Math.round(myTimeStamp/1000)) // 1711711884 (in seconds)
