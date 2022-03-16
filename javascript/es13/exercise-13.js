const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (x, y, z) =>
  console.log(divide(subtract(multiply(sum(x, y), sum(z, x)), x), z));

log(2, 4, 5);