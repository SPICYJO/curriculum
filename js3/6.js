/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr, i=0, result=[], pushed={}, seen={}) => {
  if (i >= arr.length) {
    return result
  }
  
  if (seen.hasOwnProperty(arr[i]) && !pushed.hasOwnProperty(arr[i])) {
    result.push(arr[i])
    pushed[arr[i]] = true
  }
  seen[arr[i]] = true
  return solution(arr, i+1, result, pushed, seen)
}

module.exports = {
  solution
}
