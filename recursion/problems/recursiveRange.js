// O(N)
// Given a positive integer return all the numbers from 0 to the number passed to the function

function recursiveRange(nr) {
    if (nr < 1) {
      return 0
    }

    return nr + recursiveRange(nr-1)
}

console.log(recursiveRange(5))