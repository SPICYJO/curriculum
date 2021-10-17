/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function (cb) {
    let rec = (idx = 0) => {
      if (idx >= this.length)
        return []
      
      let testResult = cb(this[idx], idx, this)
      if (testResult)
        return [this[idx], ...rec(idx+1)]
      else
        return [...rec(idx+1)]
    }
    return rec()
  }
}

module.exports = {
  solution
}
