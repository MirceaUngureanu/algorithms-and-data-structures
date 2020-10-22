// O(N)

// Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.
function memoizeFibonacci(index, cache = []) {
  if (cache[index]) {
    return cache[index]
  } else {
    if (index < 3) return 1
    else {
      cache[index] = memoizeFibonacci(index - 1, cache) + memoizeFibonacci(index - 2, cache)
    }
  }
  console.log(JSON.stringify(cache));
  return cache[index];
}
memoizeFibonacci(6)