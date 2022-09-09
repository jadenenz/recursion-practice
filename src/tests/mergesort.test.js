const mergesort = require("../mergesort")

test("sorts the array of numbers", () => {
  expect(mergesort([10, 2000, -3, 7, 16, 300])).toStrictEqual(
    [10, 2000, -3, 7, 16, 300].sort((a, b) => a - b)
  )
})
