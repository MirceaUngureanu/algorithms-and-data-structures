// O(log N)
// Given an sorted array and a number return -1 if number if not in array, otherwise return
// index at which number exists in the array

function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  // account for case when value is not in the array
  while(arr[middle] !== elem && start <= end) {
    // shift the window
    if(elem < arr[middle]){
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    // new middle
    middle = Math.floor((start + end) / 2);
  }

  // only return if middle is equal to the number, this can differ if the number is not in the array
  if(arr[middle] === elem){
    return middle;
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 3))

