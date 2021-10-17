/**
 * Creates Array.prototype.cFind that has the same functionality as find
 *   If nothing was found, return undefined (which should be default
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const solution = () => {
  Array.prototype.cFind = function (cb) {
    let rec = (idx = 0) => {
      if (idx >= this.length)
        return undefined
      
      let testResult = cb(this[idx], idx, this)
      if (testResult)
        return this[idx]
      else
        return rec(idx+1)
    }
    return rec()
  }
}

module.exports = {
  solution
}
