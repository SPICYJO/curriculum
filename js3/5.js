/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2, i=0) => {
  let keys = Object.keys(obj1)
  if (i >= keys.length) {
    return {}
  }

  let s = solution(obj1, obj2, i+1)
  s[keys[i]] = (obj2.hasOwnProperty(keys[i]))
    ? obj2[[keys[i]]](keys[i])
    : obj1[[keys[i]]]
  return s
}

module.exports = {
  solution
}
