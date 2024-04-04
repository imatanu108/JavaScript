// For each loop

const fruits = ["apple", "banana", "grapes", "pine-apple"]
fruits.forEach((value) => {
    console.log(value);
});
// apple
// banana
// grapes
// pine-apple

fruits.forEach((value, index) => {
    console.log(`${value} at index ${index}`);
});
// apple at index 0
// banana at index 1
// grapes at index 2
// pine-apple at index 3

fruits.forEach((value, index, array) => {
    console.log(value, index, array);
});

// apple 0 [ 'apple', 'banana', 'grapes', 'pine-apple' ]
// banana 1 [ 'apple', 'banana', 'grapes', 'pine-apple' ]
// grapes 2 [ 'apple', 'banana', 'grapes', 'pine-apple' ]
// pine-apple 3 [ 'apple', 'banana', 'grapes', 'pine-apple' ]

const userList = [
    {
        name: "ALex",
        age: 23,
        email: "alex@google.com"
    },
    {
        name: "James",
        age: 27,
        email: "james@microsoft.com"
    },
    {
        name: "Harry",
        age: 23,
        email: "alex@openai.com"
    }
]

userList.forEach((item) => {
    console.log((Object.keys(item)),(Object.values(item)));
});
// [ 'name', 'age', 'email' ] [ 'ALex', 23, 'alex@google.com' ]
// [ 'name', 'age', 'email' ] [ 'James', 27, 'james@microsoft.com' ]
// [ 'name', 'age', 'email' ] [ 'Harry', 23, 'alex@openai.com' ]

userList.forEach((item) => {
    console.log(Object.entries(item));
});
// [ [ 'name', 'ALex' ], [ 'age', 23 ], [ 'email', 'alex@google.com' ] ]
// [[ 'name', 'James' ], [ 'age', 27 ], [ 'email', 'james@microsoft.com' ]]
// [ [ 'name', 'Harry' ], [ 'age', 23 ], [ 'email', 'alex@openai.com' ] ]

userList.forEach((item) => {
    console.log(item.name);
}); // ALex, James, Harry

userList.forEach((item) => {
    console.log(item.age);
}); // 23, 27, 23