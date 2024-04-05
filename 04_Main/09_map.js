// Map for Arrays

const myNumbers = [ 1, 2, 3, 4, 5 ]

const squareNumbers = myNumbers.map((value) => {
    return value * value
})
console.log(squareNumbers); // [ 1, 4, 9, 16, 25 ]

// we can do map-filter chaining like this,

const newNums1 = myNumbers.map((value) => value + 1).map((value) => value * value)
console.log(newNums1); // [ 4, 9, 16, 25, 36 ]

const newNums2 = myNumbers.map((value) => value + 1).map((value) => value * value).filter((value) => value > 20)
console.log(newNums2); // [ 25, 36 ]
