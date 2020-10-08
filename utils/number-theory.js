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

module.exports = isPrime;
