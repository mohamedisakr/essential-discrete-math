function isPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if ((n > 2) & (n % 2 === 0)) {
    return false;
  }
  let maxDivisor = Math.floor(Math.sqrt(n));
  for (let d = 3; d < maxDivisor + 1; d += 2) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}

// TODO: does not return the correct smallest prime if the n is itself prime
// ex 17 => -1
function getSmallestPrime(n) {
  if (n === 1) {
    return -1;
  }
  if (n % 2 === 0) {
    return 2;
  }
  let maxDivisor = Math.floor(Math.sqrt(n));
  for (let d = 3; d < maxDivisor + 1; d += 2) {
    if (n % d === 0) {
      return d;
    }
  }
  return -1;
}

function getLargestPrime(n) {
  let num = n;
  let max = -1;

  while (num % 2 === 0) {
    max = 2;
    num /= 2;
  }

  let maxDivisor = Math.floor(Math.sqrt(num));
  for (let d = 3; d < maxDivisor + 1; d += 2) {
    while (num % d === 0) {
      max = d;
      num /= d;
    }
  }

  if (num > 2) {
    max = num;
  }

  return max;
}

module.exports = { isPrime, getSmallestPrime, getLargestPrime };
