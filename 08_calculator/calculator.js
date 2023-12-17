const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(x) {
	if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
