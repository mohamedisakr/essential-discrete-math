const primes = require("../data/prime-numbers");
const isPrime = require("../utils/number-theory");

// ****************************** Question 8 1.11. ******************

// Find a k such that the product of the first k primes, plus 1, is not prime,
// but has a prime factor larger than any of the first k primes.
// (There is no trick for solving this. You just have to try various possibilities!)

// multiply arr[i] + 1  ---> k = 1
// multiply arr[i] * arr[i+1] + 1 ---> k = 2
// multiply arr[i] * arr[i+1] * arr[i+2] + 1 ---> k = 3
// multiply arr[i] * arr[i+1] * arr[i+2] * arr[i+3] + 1 ---> k = 4

function find_First_K_Primes(primes) {
  // 2, 3, 5, 7, 11
  let mul = 1;
  const len = primes.length;
  let k;
  for (let i = 0; i < len; i++) {
    k = 0;
    for (let j = 0; j <= i; j++) {
      k++;
      console.log(primes[j]);
      mul *= primes[j];
    }
    console.log(`multiplication = ${mul}`);
    console.log("*******************");
    mul += 1;
    let prime = isPrime(mul);
    if (!prime) {
      console.log(mul);
      break;
    }
    mul = 1;
  }
  return k;
}

const k = find_First_K_Primes(primes);
console.log(k);

/*   
let i = 0;
const num = 30031;
const sqrt = Math.sqrt(num);
// console.log(`${p} ${isPrime(p)}`);
const divideBy2 = num % 2 === 0;
divideBy2 ? (i = 2) : (i = 3);
console.log(`${num} is divisible by 2? ${divideBy2}`);
// let i = 2
for (; i < 177; i++) {
  if (num % i === 0) {
    console.log(`${i} divides ${num}`);
    break;
  }
}

*/

// console.log(primes);

/*
primes.forEach((p, i, arr) => {
  // multiply arr[i] + 1
  // multiply arr[i] * arr[i+1] + 1
  // multiply arr[i] * arr[i+1] * arr[i+2] + 1
  // multiply arr[i] * arr[i+1] * arr[i+2] * arr[i+3] + 1
  mul *= p;
  mul += 1;
  console.log(mul);
  //   console.log(`${p} ${isPrime(p)}`);
}); //\n
*/
// primes.forEach(p=> {console.log(isPrime(p))})
