// O(N log N)
// Merge function
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}

// Recursive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // will continue to split in half until we reach arrays of 1 items then it will resolve
  let left = mergeSort(arr.slice(0, mid));
  // after the above half resolves it moves on
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([ 3, 1, 10, 24, 76, 73 ]))
