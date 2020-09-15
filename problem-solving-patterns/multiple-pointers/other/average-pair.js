// Given a sorted array of integers and a target average,
// is there a pair of values in the array where the average of the pair equals the target average
// O(N)

function averagePair(arr, target){
  let start = 0
  let end = arr.length-1

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === target) {
      return true
    } else if (avg < target) {
      start++
    } else {
      end--
    }
  }

  return false
}

console.log(averagePair([1,2,3], 2.5))