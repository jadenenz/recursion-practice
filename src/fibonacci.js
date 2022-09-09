function fibonacci(n) {
  if (n <= 0) {
    let fibArray = []
    return fibArray
  } else {
    let fibArray = [0, 1]
    while (fibArray.length < n) {
      const newFib =
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      fibArray.push(newFib)
    }
    return fibArray
  }
}

function fibRec(n, fibArray = [0, 1]) {
  if (fibArray.length >= n) {
    return fibArray
  }
  return fibRec(n, [...fibArray, fibArray.at(-1) + fibArray.at(-2)])
}

exports.fibonacci = fibonacci
exports.fibRec = fibRec
