// O(N)
// Given an array and a number return -1 if number if not in array, otherwise return
// index at which number exists in the array

function searchLinear(arr, nr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nr) {
      return i
    }
  }

  return -1
}

console.log(searchLinear([1,2,3,4,5], 7))