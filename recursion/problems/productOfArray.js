// O(N)
// Given an array of positive integers return the product of all numbers in array

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10]))