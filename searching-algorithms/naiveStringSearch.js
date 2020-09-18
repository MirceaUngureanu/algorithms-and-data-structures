// O(N^2)
// Given a longer string and a smaller string, count the nr of times the smaller string appears in the longer string
// wowomgzomg
//  omg


function stringSearch(larger, smaller) {
  let count = 0

  for (let i = 0; i < larger.length; i++) {
    for (let j = 0; j < smaller.length; j++) {
      // look ahead and check if string match
      if (smaller[j] !== larger[i+j]) break
      // j is the is at the last index, full string match
      if (j === smaller.length - 1) {
        count++
      }
    }
  }

  return count
}

console.log(stringSearch("wowomgzomg", "omg"))