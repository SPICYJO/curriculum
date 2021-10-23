/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, idx = 0) => {
  if (idx >= arr.length)
    return
  setTimeout(() => {
    arr[idx]()
    solution(arr, time, idx+1)
  }, time) 
}

module.exports = {
  solution
}
