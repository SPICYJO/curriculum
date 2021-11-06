/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  return arr.reduce((acc, ele) => {
    if (obj.hasOwnProperty(ele))
      acc.push(obj[ele])
    return acc
  }, [])
}

module.exports = {
  solution
}
