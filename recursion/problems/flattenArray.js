//O(N)
// Given array of array will return a new array with all values flattened

function flatten(items){
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

console.log(flatten([1,2,3,[5,6,[7,8,9,]]]))