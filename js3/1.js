/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj, i=0) => {
  if (i >= arr.length)
    return []
  
  let s = solution(arr, obj, i+1)
  if (obj.hasOwnProperty(arr[i]))
    s.unshift(obj[arr[i]])
  return s
}

module.exports = {
  solution
}
