// O(N)
// Given an object will return and array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

function collectStrings(obj) {
  let arr = []

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key])
    } else if (typeof obj[key] === "object") {
      // whatever results we have concat the next recursion
      arr = arr.concat(collectStrings(obj[key]));
    }
  }

  return arr
}

console.log(collectStrings(obj))