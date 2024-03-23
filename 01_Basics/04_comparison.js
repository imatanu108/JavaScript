console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true, the reason is that an equality check and comparison works differently. Comparison converts the null to a number treating it as 0. Thats why 'null >= o' is true and 'null == o' is false.

// == vs ===
console.log("2" == 2) //true, == checks the value only
console.log("2" === 2) //false, == checks the value and data type both
console.log(2 === 2) //true