// O(N)
// Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(a, b) {
  const first = a.toString().split("")
  const second = b.toString().split("")

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  if (first.length !== second.length) {
    return false
  }

  for (let val of first) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of second) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let val in frequencyCounter1) {
    if (frequencyCounter1[val] !== frequencyCounter2[val]) {
      return false
    }
  }

  return true
}

console.log(sameFrequency(182, 281))