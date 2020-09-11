// O(N)
//takes in an organised array of numbers

function sumZero(arr){
  let left = 0
  let right = arr.length - 1

  // can't overlap because if we have 0 in the array it would be a false positive
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))
