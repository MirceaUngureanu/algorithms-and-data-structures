function areThereDuplicates(...args) {
  let frequencyCoutter = {}

  for (let i of args) {
    frequencyCoutter[i] = (frequencyCoutter[i] || 0) + 1
  }

  for (let i of args) {
    if (frequencyCoutter[i] > 1) {
      return true
    }
  }

  return false
}

console.log(areThereDuplicates(1,2,3))