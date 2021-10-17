/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col) => {
  // generate 1d array when row == 0
  if (row == 0 && col == 0)
    return []
  if (row == 0) { 
    let arr = solution(row, col-1)
	arr.unshift(0)
    return arr
  }
  // generate 2d array
  if (row == 1)
    return [solution(0, col)]
  let arr = solution(row-1, col)
  arr.unshift(solution(0, col))
  return arr
}

module.exports = {
  solution
}
