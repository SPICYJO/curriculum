/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} num
 * @returns {array}
 */

const solution = (num) => {
  if (num == 0)
    return []
  let arr = solution(num-1)
  arr.push(num-1)
  return arr
}

module.exports = {
  solution
}
