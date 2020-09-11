// O(N)
//takes in an organised array of numbers
// we use to pointer starting at from one side
// one pointer is the scout while the other is the base
//  i
// [1,2,3,4,4,4,7,7,12,12,13]
//    j

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }

  let uniqueValues = []
  let i = 0

  for (let j = 0; j < arr.length; j++) {
    if (j === 0) {
      uniqueValues.push(arr[j])
    } else if (uniqueValues[i] !== arr[j]) {
      uniqueValues.push(arr[j])
      i++
    }
  }

  return i+1
}

console.log(countUniqueValues([-1,1,2,3,4,4,4,7,7,12,12,13]))
