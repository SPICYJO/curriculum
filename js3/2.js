/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const makeRow = (y, num2, i=0) => {
  if (i >= num2)
    return []
  let r = makeRow(y, num2, i+1)
  r.unshift({x: i, y: y})
  return r
}

const solution = (num1, num2, i=0) => {
  if (i >= num1)
    return []
  let s = solution(num1, num2, i+1)
  s.unshift(makeRow(i, num2))
  return s
}

module.exports = {
  solution
}
