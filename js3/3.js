/*
 * write a function called solution that takes in an array of strings and returns a function. when the returned function is called (with an object with many keys), it will return an object with only keys that exist in the input arrary.
 * @param {array} arr {object} obj
 * @return {object} obj
 */

const solution = (arr) => {
  return (obj) => {
    return arr.reduce((acc, ele) => {
      if (obj.hasOwnProperty(ele))
        acc[ele] = obj[ele]
      return acc
    }, {})
  }
}

module.exports = {
  solution
}
