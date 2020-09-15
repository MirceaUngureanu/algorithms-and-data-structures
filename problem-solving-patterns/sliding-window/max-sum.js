// Calculate the maximum sum of n consecutive elements in the array
// O(N^2)

function maxSubarraySum(arr, num) {
  // if the sum is larger then the length of the array
  if ( num > arr.length){
    return null;
  }
  // account for negative numbers
  let max = -Infinity
  // we don't go to the end of the array because we don't want to add less than the number required for the sequence
  for (let i = 0; i < arr.length - num + 1; i ++){
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


