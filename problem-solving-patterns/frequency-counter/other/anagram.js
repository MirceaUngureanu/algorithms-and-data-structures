// O(N)
// Assume that we have two input of lowercase strings with not special characters.
// We test if the second string is an anagram of the fist.

function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let letterCounter1 = {}
  let letterCounter2 = {}

  for (let letter of str1) {
    letterCounter1[letter] = (letterCounter1[letter] || 0) + 1
  }
  for (let letter of str2) {
    letterCounter2[letter] = (letterCounter2[letter] || 0) + 1
  }

  for (let key in letterCounter1) {
    // if second string doesn't contain current letter
    if (!(key in letterCounter2)) {
      console.log('returned first 1')

      return false
    }

    if (letterCounter2[key] !== letterCounter1[key]) {
      console.log('returned second 1')
      return false
    }
  }

  for (let key in letterCounter2) {
    // if second string doesn't contain current letter
    if (!(key in letterCounter1)) {
      console.log('returned first 2')

      return false
    }
  }

  console.log(letterCounter1)
  console.log(letterCounter2)

  return true;
}

console.log(validAnagram('testset', 'settest'))