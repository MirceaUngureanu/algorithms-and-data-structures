// Optimized BubbleSort with noSwaps
// Still O(N^2) worst case scenario,
// but faster due to removal of unnecessary actions
function bubbleSort(arr){
  let noSwaps;

  for(let i = arr.length; i > 0; i--){
    noSwaps = true;

    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    // no swaps on last inner loop
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]))