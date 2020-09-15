function sumRange(nr) {
  if (nr === 1) return 1

  return nr + sumRange(nr-1)
}

console.log(sumRange(3))