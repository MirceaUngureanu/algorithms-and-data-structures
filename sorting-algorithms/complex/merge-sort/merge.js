// O(N+M)
// Merges two already sorted arrays
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  // while both array have items
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  //add the rest of the items in the remaining array
  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}
merge([100,200], [1,2,3,5,6])

