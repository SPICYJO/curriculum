/**
 * Write a function called solution that
 * Takes in 3 numbers, return the largest
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number}
 */

const solution = (num1, num2, num3) => {
  let max = num1
  max = (num2 > max) ? num2 : max
  max = (num3 > max) ? num3 : max
  return max
}

module.exports = {
  solution
}
