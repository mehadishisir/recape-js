// spread operator
const fruits = ["apple", "banana", "cherry"];
const foods = ["bread", "milk", ...fruits, "eggs"];
console.log(foods); // ['bread', 'milk', 'apple', 'banana', 'cherry', 'eggs']
const numbers = [3, 5, 1, 8, 2];

const max = Math.max(...numbers);
console.log(max);
