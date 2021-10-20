/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function (cb, idx = 0) {
    if (idx >= this.length)
      return []
    
    if (cb(this[idx], idx, this)) {
      let arr = this.cFilter(cb, idx+1)
      arr.unshift(this[idx])
      return arr
    }
    return this.cFilter(cb, idx+1)
  }
}

module.exports = {
  solution
}
