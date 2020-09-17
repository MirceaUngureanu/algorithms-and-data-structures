// O(N)
// Given an array of integers and a callback function will return true if a
// single value in the array returns true when passed ot the callback

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (arr.length === 0) return false
  if (cb(arr[0])) return true

  return someRecursive(arr.slice(1), cb)
}

console.log(someRecursive([ 1, 2, 3, 4 ], isOdd))
console.log(someRecursive([ 2,4,6 ], isOdd))