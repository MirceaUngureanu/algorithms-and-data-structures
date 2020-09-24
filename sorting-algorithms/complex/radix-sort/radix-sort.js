// Get number at index
// The value of a digit based on its position or place in a number is known as its place value.
// Math.abs will handle negative numbers
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // special case when passing 0 to log10 method results in -Infinity
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// O(NK)
// O(N) - length of array
// O(K) - max nr of digits in a number
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // create the sorting "buckets"
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      // push nr to bucket based on current place value
      digitBuckets[digit].push(nums[i]);
    }
    // mutate array with new order from buckets
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([ 23, 345, 5467, 12, 2345, 9852 ]))








