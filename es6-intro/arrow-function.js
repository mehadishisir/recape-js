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
// console.log(output);
// more critical arrow function

// tex

const tax = (ammount, TaxRate) => (ammount * TaxRate) / 100;
const taxAmount = tax(5000, 18);
// console.log(taxAmount);

// single parameter arrow function
const square = (num) => num * num;
console.log(square(9));
// console log on function call
const log = (num) => console.log("arrow function with no parameter");
console.log(log());
