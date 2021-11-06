/*
 * write a function called solution that takes in an array of strings and returns a function. when the returned function is called (with an object with many keys), it will return an object with only keys that exist in the input arrary.
 * @param {array} arr {object} obj
 * @return {object} obj
 */

const solution = (arr) => {
  return (obj, i=0) => {
    if (i >= arr.length)
      return {}
    
    let s = solution(arr)(obj, i+1)
    if (obj.hasOwnProperty(arr[i])) {
      s[arr[i]] = obj[arr[i]]
    }
    return s
  }
}

module.exports = {
  solution
}
