/*
If every element of X is an element of Y, we say
that X is a subset of Y and write X ⊆ Y.

In other words, X is a subset of Y if for every x, if x ∈ X, then x ∈ Y.
*/
const isSubset = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    let hasElement = b.includes(a[i]);
    if (hasElement === false) {
      return false;
    }
  }
  return true;
};

let C = [1, 3];
let A = [1, 2, 3, 4];
let result = isSubset(C, A);
console.log(result === true);

C = [1, 2, 3];
A = [0, 1, 2, 3, 4, 5];
result = isSubset(C, A);
console.log(result === true);

C = [2, 4, 6];
A = [2, 3, 4, 6];
result = isSubset(C, A);
console.log(result === true);

C = [2, 4, 6];
A = [1, 3, 4, 6];
result = isSubset(C, A);
console.log(result === true);
