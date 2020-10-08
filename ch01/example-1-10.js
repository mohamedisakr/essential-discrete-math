const { getSmallestPrime } = require("../utils/number-theory");

/* Example 1.10
 * Choose m distinct numbers between 2 and 40 inclusive, where
 * m ≥ 13. Then at least two of the numbers have some common divisor greater than 1.
 */
const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
// console.log(p.length);

// f(16) = 2, f(17) = 17, and f(21) = 3
let n = 16;
console.log(getSmallestPrime(n));

n = 17;
console.log(getSmallestPrime(n));

n = 21;
console.log(getSmallestPrime(n));
