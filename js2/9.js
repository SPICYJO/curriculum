/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, initialValue) {
    let rec = (idx, acc) => {
      if (idx >= this.length)
        return acc
      let newAcc = cb(acc, this[idx], idx, this)
      return rec(idx+1, newAcc)
    }
    if (initialValue === undefined)
      return rec(1, this[0]) 
    return rec(0, initialValue)
  }
}

module.exports = {
  solution
}
