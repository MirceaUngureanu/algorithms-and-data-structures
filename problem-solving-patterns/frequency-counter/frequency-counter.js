// O(N^2) due to "indexOf()" being a second loop because it can iterate over the entire array
// ** exponentiation operator, shorthand for Math.pow

function sameButSquared(arr1, arr2){
  // if mismatch we short circuit
  if(arr1.length !== arr2.length){
    return false;
  }

  for(let i = 0; i < arr1.length; i++){
    // does second array contain the double of current number? if not return false
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }

    // this will remove items from the cond array as we check them, this is used to check for duplicates
    console.log(arr2);
    arr2.splice(correctIndex,1)
  }

  return true;
}

console.log(sameButSquared([1,2,3,2], [9,1,4,4]))

