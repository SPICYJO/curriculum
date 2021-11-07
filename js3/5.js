/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2) => {
  return Object.keys(obj1).reduce((acc, ele) => {
    acc[ele] = (obj2.hasOwnProperty(ele))
      ? obj2[ele](ele)
      : obj1[ele]
    return acc
  }, {})
}

module.exports = {
  solution
}
