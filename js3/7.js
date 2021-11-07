/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function (cb) {
    return Object.keys(this).reduce((acc, key, i) => {
      acc.push(cb(key, this[key], i))
      return acc
    }, [])
  }
}

module.exports = {
  solution
}
