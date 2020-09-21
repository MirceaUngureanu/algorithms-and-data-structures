// O(N^2)
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  // start from the end so we don't have unnecessary operations
  for(let i = arr.length; i > 0; i--){
    // only loop the required number of times for remaining items
    for(let j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        // sort array
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
// function bubbleSortES6(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

console.log(bubbleSort([8,1,2,3,4,5,6,7]))