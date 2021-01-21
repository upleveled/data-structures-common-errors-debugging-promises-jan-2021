function sum(a, b) {
  const result = a + b;
  return result;
}

sum(1, 2);

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(result); // ReferenceError: result is not defined

// ✅ Solution 1: Assign the return value of the function

function sum(a, b) {
  const result = a + b;
  return result;
}

const sumResult = sum(1, 2);

console.log(sumResult); // 3

// Solution 2: Declare the variable before the function

let result2;

function sum2(a, b) {
  result2 = a + b;
  return result2;
}

sum2(1, 2);

console.log(result2); // 3
