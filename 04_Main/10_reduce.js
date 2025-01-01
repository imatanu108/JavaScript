// Reduce

const myNumbers = [ 1, 2, 3, 4, 5 ]

const sumOfAll = myNumbers.reduce((value, currentValue) => {
    console.log(`value: ${value}, current value: ${currentValue}`); // only for clarity
    return value + currentValue;
}, 0)

console.log(sumOfAll);
// value: 0, current value: 1
// value: 1, current value: 2
// value: 3, current value: 3
// value: 6, current value: 4
// value: 10, current value: 5
// 15

const factorial = myNumbers.reduce((value, currentValue) => (value * currentValue), 1)
console.log(factorial); // 120

const shoppingCart = [
    {itemName: "Sport Sneakers", price: 1299},
    {itemName: "Backpack", price: 1099},
    {itemName: "Adidas T-Shirt", price: 1499},
    {itemName: "Hero Cricket Bat", price: 1199},
    {itemName: "Indian Jersy", price: 1299}
]

let totalPrice = shoppingCart.reduce((value, currentValue) => (value +  currentValue.price), 0);
console.log(totalPrice); // 6395