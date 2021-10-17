/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time) => {
  if (arr.length == 0)
		return
	setTimeout(() => {
		arr[0]()
		solution(arr.slice(1, arr.length), time)
	}, time) 
}

module.exports = {
  solution
}
