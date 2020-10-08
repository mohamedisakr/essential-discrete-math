const { getLargestPrime } = require("../utils/number-theory");

/**
 * 1.2.
 * Let f(n) be the largest prime divisor of n. Can it happen that x < y but
 * f(x) > f(y)? Give an example or explain why it is impossible.
 */
let n = 10;
let max = getLargestPrime(n);
console.log(max);

n = 15;
max = getLargestPrime(n);
console.log(max);

n = 140;
max = getLargestPrime(n);
console.log(max);
