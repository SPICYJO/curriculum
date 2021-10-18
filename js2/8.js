/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb, idx = 0) {
    if (idx >= this.length)
      return []
    let ele = cb(this[idx], idx, this)
    let arr = this.cMap(cb, idx+1)
    arr.unshift(ele)
    return arr
  }
}

module.exports = {
  solution
}
