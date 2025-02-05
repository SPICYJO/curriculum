/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  Array.prototype.cForEach = function (cb, idx = 0) {  
    if(idx >= this.length)
      return
    cb(this[idx], idx, this)
    this.cForEach(cb, idx+1)
  }
}

module.exports = {
  solution
}
