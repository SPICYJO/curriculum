/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, idx = 0) => {
  if (idx >= arr.length)
    return
  setTimeout(arr[idx], time)
  return solution(arr, time, idx+1)
}

module.exports = {
  solution
}
