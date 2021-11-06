/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj, i=0) => {
  return arr.filter(ele => obj.hasOwnProperty(ele))
            .map(ele => obj[ele])
}

module.exports = {
  solution
}
