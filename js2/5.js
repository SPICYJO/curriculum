/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time) => {
  if (arr.length == 0)
		return
	setTimeout(arr[0], time)
	return solution(arr.slice(1, arr.length), time)
}

module.exports = {
  solution
}
