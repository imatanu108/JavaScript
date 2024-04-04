// ARRAY LOOPS

// FOR-OF LOOP
let myArr = [1, "Hello World!", false, 566747477474n, {name: "Alex", age: 24}]
for (const item of myArr) {
    console.log(`${item}: ${typeof item}`);
}
// 1: number
// Hello World!: string
// false: boolean
// 566747477474: bigint
// [object Object]: object

let greetings = "Hello!"
for (const char of greetings) {
    console.log(char);
} 
// H
// e
// l
// l
// o
// !

const myObj = {
    name: "Alex",
    age: 23
}
// for (const item of myObj) {
//     console.log(item);
// } // Type Error as myObj is not iterable

// Maps - Similar to Object, with conating unique key-value pairs
const myMap = new Map()
myMap.set('py', 'Python')
myMap.set('js', 'JavaScript')
myMap.set('cpp', 'C++')
myMap.set('py', 'Python') // will not be added again as already added
console.log(myMap); // Map(3) { 'py' => 'Python', 'js' => 'JavaScript', 'cpp' => 'C++' }

for (const item of myMap) {
    console.log(item);
}
// [ 'py', 'Python' ]
// [ 'js', 'JavaScript' ]
// [ 'cpp', 'C++' ]

for (const [key, value] of myMap) {
    console.log(key, value);
}
// py Python
// js JavaScript
// cpp C++
