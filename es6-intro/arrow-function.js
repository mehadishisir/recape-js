// function expression
// add(3, 4);
function add(a, b) {
  console.log(a + b);
}

// function declaration
const sum = function (add1, add2) {
  return add1 + add2;
};
// const result = sum(5, 7);
// console.log(result);

// Arrow function
const multiply = (mult1, mult2) => {
  const m1 = mult1 * 3;
  const m2 = mult2 * 2;
  const d1 = (m1 + m2) / 2;
  return { m1, m2, d1 };
};
const output = multiply(4, 7);
console.log(output);
