// O(N)

function collectOddValues(arr){

  // outer functions allows us to collect the values we need to return
  let result = [];

  //recursive function
  function helper(helperInput){
    if(helperInput.length === 0) {
      return;
    }

    // nr divided by 2 has a remainder, is odd
    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }

    // call the function again with the rest of the array
    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))