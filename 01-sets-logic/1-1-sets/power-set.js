/*
The set of all subsets (proper or not) of a set X, denoted P(X), is called 
the power set of X
*/

const generatePowerSet = (set) => {
  const n = set.length;
  const p = Math.pow(2, n);
  let power = [];

  for (let counter = 0; counter < p; counter++) {
    let inner = [];
    for (let i = 0; i < n; i++) {
      if ((counter & (1 << i)) !== 0) {
        inner.push(set[i]);
      }
    }
    power.push(inner);
  }

  return power;
};

// let set = [1, 2, 3];
// result = generatePowerSet(set);
// console.log(result.length === 8);
// console.log(result);
// console.log(`power set length: ${result.length}`);

// set = [1, 2, 3, 4];
// result = generatePowerSet(set);
// console.log(result.length === 16);
// console.log(result);
// console.log(`power set length: ${result.length}`);

set = [1, 2, 3, 4, 5];
result = generatePowerSet(set);
console.log(result.length === 32);
console.log(result);
console.log(`power set length: ${result.length}`);
