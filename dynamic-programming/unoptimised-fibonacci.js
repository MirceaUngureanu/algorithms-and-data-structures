// O(2*N)

function fibonacci(index, cache = []) {
    if (index < 3) return 1
    return fibonacci(index - 1) + fibonacci(index - 2)
}
fibonacci(6)