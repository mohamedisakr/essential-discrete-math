/*
Two sets X and Y are equal and we write X = Y if X and Y have the same elements.
To put it another way, X = Y if the following two conditions hold:
■ For every x, if x ∈ X, then x ∈ Y,
and
■ For every x, if x ∈ Y, then x ∈ X.
*/
const isEqualSets = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    let hasElement = b.includes(a[i]);
    if (hasElement === false) {
      return false;
    }
  }
  return true;
};

let A = [1, 2, 6];
let B = [6, 1, 2];

let result = isEqualSets(A, B);
console.log(result === true);

A = [1, 2, 6];
B = [16, 17, 2];
result = isEqualSets(A, B);
console.log(result === true);

A = [1, 2, 6];
B = [6, 12, 42];
result = isEqualSets(A, B);
console.log(result === true);

A = [1, 2, 6];
B = [7, 9, 14];
result = isEqualSets(A, B);
console.log(result === true);
