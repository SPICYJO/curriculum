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
  if (row == 0 && col == 0)
		return []
	if (row == 0)
		return [0, ...solution(row, col-1)] // generate 1d array
  if (row == 1)
		return [solution(0, col)]
	return [solution(0, col), ...solution(row-1, col)]
}

module.exports = {
  solution
}
