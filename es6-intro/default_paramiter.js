const sum = (add1, add2) => {
  const total = add1 + add2;
  console.log(total);
};
// sum(5, 10)

function multiply(mul1, mul2, mul3 = 2) {
  const multiply = mul1 * mul2 * mul3;
  console.log(multiply);
}
multiply(5, 10);
