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
  // helper function to generate 1d array
  let generate1DArray = (size) => {
    if (size == 0)
      return []
    let arr = generate1DArray(size-1)
    arr.push(0)
    return arr
  }
  
  if (row == 0) { 
    return []
  }
  let arr = solution(row-1, col)
  arr.push(generate1DArray(col))
  return arr
}

module.exports = {
  solution
}
