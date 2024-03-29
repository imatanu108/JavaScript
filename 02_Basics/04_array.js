// ARRAY PART 1

const myArray = [0, 1, 3, 6.7, -5, false, "Hello"] // an array can hold multiple types of data
console.log(myArray); // [ 0, 1, 3, 6.7, -5, false, 'Hello' ]

const numArray = [0, 1, 7, 3, 4, 5]
const myHeros = new Array("thor", "iron-man", "hulk") // using array constructor
console.log(myHeros[2]); // hulk

// array methods
// when we copy an array it returns its shallow copy (copy by refference)
// you should also know about deep copy (copy by values)

numArray.push(8) // appends the new element at the end of an Array
console.log(numArray); // [ 0, 1, 7, 3, 4, 5, 8]

numArray.pop() // removes the last element from an array
console.log(numArray); // [ 0, 1, 7, 3, 4, 5 ]

numArray.unshift(2) // insert an element to the start of an array
console.log(numArray); // [ 2, 0, 1, 7, 3, 4, 5]
numArray.shift(2) // removes the first element of an array
console.log(numArray); // [ 0, 1, 7, 3, 4, 5 ]

console.log(numArray.includes(76)); // false - checks if the element exists in the array
console.log(numArray.includes(7)); //true

console.log(numArray.indexOf(7)); // 2 - returns the index of the element
console.log(numArray.indexOf(76)); // -1 : returns -1 for non existing elements

console.log(numArray.join()); // 0,1,7,3,4,5 - returns a string of elements
console.log(myHeros.join("-")); //thor-iron-man-hulk

// slice and splice
// numArray = [ 0, 1, 7, 3, 4, 5 ]

console.log(numArray.slice(1,3)); // [ 1, 7 ]: Returns a copy of a section of an array. Don't takes the last index. After this method parent array doesn't get changed its just returns a new array with selected elements
console.log(numArray); // [ 0, 1, 7, 3, 4, 5 ]

const splicedArray = numArray.splice(1,3) // cuts a selected part from the parent array and returns a new array with those values, also modifies the parent array by removing the selected elements from the array
console.log(splicedArray); // [ 1, 7, 3 ]
console.log(numArray); // [ 0, 4, 5 ]


// ARRAY PART 2

const fruits = ["apple", "mango", "grapes"]
const vegetables = ["potato", "carrot", "eggplant"]

fruits.push(vegetables)
console.log(fruits); // [ 'apple', 'mango', 'grapes', [ 'potato', 'carrot', 'eggplant' ] ]
console.log(fruits[1]); // mango
console.log(fruits[3]); // [ 'potato', 'carrot', 'eggplant' ]
console.log(fruits[3][1]); // carrot

const arr1 = [12, 4, 7]
const arr2 = [5, 14, 3]
const arr3 = arr1.concat(arr2) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(arr1) // [ 12, 4, 7 ]
console.log(arr2) // [ 5, 14, 3 ]
console.log(arr3) // [ 12, 4, 7, 5, 14, 3 ]

// using spread operator(...) to merge multiole arrays
const arr4 = [...arr1, ...arr2, 100]
console.log(arr4); // [ 12, 4, 7, 5, 14, 3, 100]

const mixArray = [2, 4,[5, 6, 9], 4, [3, 7, [4, 12, 7], 8], 11]
const flatArray = mixArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(flatArray); // [2, 4, 5, 6, 9, 4, 3, 7, 4, 12, 7, 8, 11]

const flatArray2 = mixArray.flat(1) // here '1' is the depth of maximum recursion
console.log(flatArray2) // [ 2, 4, 5, 6, 9, 4, 3, 7, [ 4, 12, 7 ], 8, 11 ]

// ARRAY PART 3

console.log(Array.isArray("ALex")); // false - checks for any existing array
console.log(Array.from("ALex")); // [ 'A', 'L', 'e', 'x' ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
