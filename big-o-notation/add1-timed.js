const { performance } = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now()
const result = addUpTo(1000000000)
const t2 = performance.now()

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`, `Result: ${result}`)