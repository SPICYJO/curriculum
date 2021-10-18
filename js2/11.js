/**
 * Creates Array.prototype.cFind that has the same functionality as find
 *   If nothing was found, return undefined (which should be default
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const solution = () => {
  Array.prototype.cFind = function (cb, idx = 0) {
    if (idx >= this.length)
      return undefined
    
    if (cb(this[idx], idx, this))
      return this[idx]
    return this.cFind(cb, idx+1)
  }
}

module.exports = {
  solution
}
