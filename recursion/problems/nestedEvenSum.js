//O(N)
// Given an object that may contain nested objects, return the sum of all even numbers in the object

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

function nestedEvenSum (obj, sum=0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key]);
      // if number and even
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
      sum += obj[key];
    }
  }
  return sum;
}

console.log(nestedEvenSum(obj1))