/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb) {
    let rec = (idx = 0) => {
      if (idx >= this.length)
        return []
      return [cb(this[idx], idx, this), ...rec(idx+1)]
    }
    return rec()
  }
}

module.exports = {
  solution
}
