// O(N)
// ** exponentiation operator, shorthand for Math.pow

function sameButSquared(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }

  // each object will have a value which is the item and the value is the nr of times each item is in the array
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for(let key in frequencyCounter1){
    // do we have a double in the second array
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    // is the double value equal to current base value, accounts for duplicate values
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

console.log(sameButSquared([1,2,3,2,5], [9,1,4,4,25]))
