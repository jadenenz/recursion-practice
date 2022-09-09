function mergesort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergesort(left), mergesort(right))
}

function merge(leftArray, rightArray) {
  const mergeContainer = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithLowerElement =
      leftArray[0] < rightArray[0] ? leftArray : rightArray
    const elementToMerge = arrayWithLowerElement.shift()
    mergeContainer.push(elementToMerge)
  }

  return mergeContainer.concat(leftArray, rightArray)
}

module.exports = mergesort
