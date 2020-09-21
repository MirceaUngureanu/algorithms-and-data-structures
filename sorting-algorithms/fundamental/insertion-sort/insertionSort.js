// O(N^2)

function insertionSort(arr){
  let currentVal;

  for(let i = 1; i < arr.length; i++){
    currentVal = arr[i];
    // start from the the current item (i) and compare backwards to the rest of the sorted data
    // compare until we reach index 0 or we find and item that is less or equal to currentVal
    for(let j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      // moves items up in the arr to make space for currentVal
      arr[j+1] = arr[j]
    }
    // insert currentVal at correct position
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4])