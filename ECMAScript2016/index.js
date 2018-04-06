// 1. Array.prototype.includes

const arr = [1, 25, 8, 7, NaN];

console.log(arr.includes(25)); // true
console.log(arr.indexOf(25) != -1); // true

console.log(arr.includes(NaN)); // true
console.log(arr.indexOf(NaN) != -1); // false /!\

// 2. Exponentiation infix operator **

console.log(Math.pow(8, 2)); // 64
console.log( 8 ** 2 ); // 64
