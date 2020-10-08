const primes = require("../data/prime-numbers");
const { isPrime } = require("../utils/number-theory");

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

// multiply arr[i] + 1
// multiply arr[i] * arr[i+1] + 1
// multiply arr[i] * arr[i+1] * arr[i+2] + 1
// multiply arr[i] * arr[i+1] * arr[i+2] * arr[i+3] + 1

/*    
// console.log(primes);
// 2, 3, 5, 7, 11
let mul = 1;
// let num = 1;
const len = 10; //primes.length;

for (let i = 0; i < len; i++) {
  // num = 1;
  for (let j = 0; j <= i; j++) {
    console.log(primes[j]);
    mul *= primes[j];
    // console.log(mul);
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
*/

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
