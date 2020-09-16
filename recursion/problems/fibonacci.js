// O(2^N)
// Given a positive integer return the nth number in the Fibonacci sequence
// e.g. fib(4) return 3

// explanation: https://medium.com/launch-school/recursive-fibonnaci-method-explained-d82215c5498e

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10))