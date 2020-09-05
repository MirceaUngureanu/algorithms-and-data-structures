// O(n) space

function doubleArray(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i])
  }

  return newArray
}

console.log(doubleArray([1,2,3,4,5]))