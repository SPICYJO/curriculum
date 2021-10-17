/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  Array.prototype.cForEach = function (cb) {
    let rec = (idx = 0) => {
      if(idx >= this.length)
        return
      cb(this[idx], idx, this)
      rec(idx+1)
    }
    rec()
  }
}

module.exports = {
  solution
}
