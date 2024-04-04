// for loop
const superHeroes = ["Thor", "Hulk", "Spider-man"]

for (let i = 0; i < superHeroes.length; i++) {
    const element = superHeroes[i];
    console.log(element);
} 
// Thor, Hulk, Spider-man

for (let i = 1; i <= 10; i++) {
    console.log(i);
} // 1, 2, 3 ,...., 10

// outer loop inner loop
for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop i: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Outer loop i: ${i}, inner loop j: ${j}`);   
    }
}
// Outer loop i: 0
// Outer loop i: 0, inner loop j: 0
// Outer loop i: 0, inner loop j: 1
// Outer loop i: 0, inner loop j: 2
// ...

// BREAK AND CONTINUE

for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i == 3) {
        console.log("3 detected!");
        break;
    }
}
// 1
// 2
// 3
// 3 detected!

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        console.log("3 detected!")
        continue;
    }
    console.log(i);
}
// 1
// 2
// 3 detected!
// 4
// 5