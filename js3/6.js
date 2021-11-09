/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr) => {
  let result = []
  arr.reduce((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1
    if (acc[ele] === 2)
      result.push(ele)
    return acc
  }, Object.create(null))

  return result
}

module.exports = {
  solution
}
