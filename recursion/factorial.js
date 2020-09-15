function factorial(nr) {
  if (nr === 1) return 1

  return nr * factorial(nr-1)
}

console.log(factorial(4))