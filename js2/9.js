/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, acc, idx = 0) {
    if (acc === undefined)
      return this.cReduce(cb, this[0], idx+1) 
    
    if (idx >= this.length)
        return acc
    let newAcc = cb(acc, this[idx], idx, this)
    return this.cReduce(cb, newAcc, idx+1)
  }
}

module.exports = {
  solution
}
