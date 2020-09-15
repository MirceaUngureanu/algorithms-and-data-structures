// Given an array of integers and a number, find the maximum sum of a subarray with the length of the number passed to the function.
// The subarray must consist of consecutive elements
// O(N)

function maxSubArraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    // we only swap out first and last numbers and then compare the values, e.g. num is 2 we swap 1 with 3 and compare
    // /
    // 1,2,3,4,5,6
    //     /
    currentTotal += arr[i] - arr[i-num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubArraySum([100,200,300,400], 2))