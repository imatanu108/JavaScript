// WHILE LOOP

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
} // 0, 1, 2, .... 10
console.log(`Current value of i: ${i}`) // Current value of i: 11

let j = 1;
while (j <= 10) {
    console.log(`${j} * 5 : ${j*5}`);
    j++;
}

const fruits = ["apple", "lemon", "pineapple"]
let k = 0;
while (k < fruits.length) {
    console.log(fruits[k]);
    k++;
} // apple, lemon, pineapple

let l = 0;
while (l <= 10) {
    console.log(l);
    if (l == 4) break;
    l++;
} // 0, 1, 2, 3, 4

const users = [
    {
        username: "Alex",
        age: 24
    },
    {
        username: "Jamse",
        age: 25
    },
    {
        username: "Rohit",
        age: 32
    }
]

let n = 0;
while (n < users.length) {
    console.log(Object.entries(users[n]));
    n++;
}
// [ [ 'username', 'Alex' ], [ 'age', 24 ] ]
// [ [ 'username', 'Jamse' ], [ 'age', 25 ] ]
// [ [ 'username', 'Rohit' ], [ 'age', 32 ] ]

let p = 1;
do {
    console.log(p);
    p++;
} while (p > 100); // 1
console.log(p); // 2