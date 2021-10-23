/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */

const solution = (fun, i=0) => {
  if (fun(i))
		return []
  let arr = solution(fun, i+1)
  arr.unshift(i)
	return arr
}

module.exports = {
  solution
}
