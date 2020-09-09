function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  let lookup = {}

  for (let i = 0; i < first.length; i++) {
    const letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  console.log(lookup)

  for (let j = 0; j < second.length; j++) {
    const letter = second[j]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      // account for duplicate letters by decrementing
      lookup[letter] -= 1
    }
  }

  return true
}

console.log(validAnagram('anagrams', 'nagaramm'))
console.log(validAnagram('anagram', 'nagaram'))
