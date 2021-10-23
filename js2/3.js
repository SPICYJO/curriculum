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

const solution = (row, col, result = []) => {
  // helper function to generate 1d array
  if (row === 0) { 
    return result
  }
  result.push(generate1DArray(col))
  return solution(row-1, col, result)
}

const generate1DArray = (size, result = []) => {
  if (size === 0)
  	return result
  result.push(0)
  return generate1DArray(size-1, result)
}

module.exports = {
  solution
}
