// For in loops

let myObj = {
    name: "Alex",
    age: 23
}

for (const key in myObj) {
   console.log(`${key}: ${myObj[key]}`);
}
// name: Alex
// age: 23

let myArr = ["Rohit", 34, "James"]
for (const key in myArr) {
    console.log(`${key}: ${myArr[key]}`);
}
// 0: Rohit
// 1: 34
// 2: James - indexs are the key of Array

let greetings = "Hello!"
for (const key in greetings) {
    console.log(`${key}: ${greetings[key]}`);
}
// 0: H
// 1: e
// 2: l
// 3: l
// 4: o
// 5: !
