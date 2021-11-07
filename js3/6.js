/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr) => {
  let counter = arr.reduce((acc, ele) => {
    acc[ele] = (acc[ele] === undefined) ? 1 : acc[ele]+1
    return acc
  }, Object.create(null))

  return Object.keys(counter).filter(ele => counter[ele] > 1).map(Number)
}

module.exports = {
  solution
}
