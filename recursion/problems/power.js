// Given base and exponent return power of the base to the exponent
// O(N)

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 1))