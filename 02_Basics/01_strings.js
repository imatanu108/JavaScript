const studentName = "Alex"
const rollNumber = 67

console.log(`My name is ${studentName} and roll number is ${rollNumber}.`);

// Declaring strings using String constructor

const username = new String('imalex')

console.log(username[2]);
console.log(username.length); // 6
console.log(username.toUpperCase()); // IMALEX
console.log(username.toLowerCase()); //imalex
console.log(username.charAt(4)); //e
console.log(username.charAt(10)); //
console.log(username.indexOf('m')); //1
console.log(username.charCodeAt(4)); //101, the charCodeAt() method returns the unicode of the existing character at that index

const subString = username.substring(1,4)
console.log(subString);
const anotherString = username.slice(1,4)
console.log(anotherString);

const badString = '    Hello World     '
console.log(badString.trim()); // 'Hello world'
console.log(badString.trimEnd()); //'    Hello World'
console.log(badString.trimStart()); // 'Hello World     '

const url1 = "https://mycode.com/js%20beginner"
const fixedURL1 = url1.replace("%20", "-"); //only replaces one occurence
console.log(fixedURL1) //https://mycode.com/js-beginner

const url2 = "https://mycode.com/js%20for%20beginner%20to%20advance"
const fixedURL2 = url2.replace(/%20/g, "-"); //replaces all occurences
console.log(fixedURL2) //https://mycode.com/js-for-beginner-to-advance

//another method is-
const url = "https://mycode.com/js%20for%20beginner";
const fixedURL = url.split("%20").join("-");
console.log(fixedURL); //https://mycode.com/js-for-beginner

const newMessage = "I am really a dumb"
const splitMessage = newMessage.split(" ")
console.log(splitMessage); // [ 'I', 'am', 'really', 'a', 'dumb' ]
console.log(splitMessage.join("-")); // I-am-really-a-dumb

const message = "Are you Dumb?"
console.log(message.includes("you")) // true
console.log(message.includes("hello")) // false
