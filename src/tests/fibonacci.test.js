const { fibonacci } = require("../fibonacci")
const { fibRec } = require("../fibonacci")

test("the fibonacci array length is equal to the input number", () => {
  expect(fibonacci(5)).toHaveLength(5)
})

test("an input of 8 returns the first 8 digits of the fibonacci sequence", () => {
  expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test("returns an empty array if input is a negative number", () => {
  expect(fibonacci(-5000)).toStrictEqual([])
})

test("an input of 8 returns the first 8 digits of the fibonacci sequence for the recursive function", () => {
  expect(fibRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13])
})
