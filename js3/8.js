/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
*/

const solution = (obj, num) => {
  const loopFun = (keys, i=0) => {
    if (i >= keys.length)
      return
    
    obj[keys[i]](keys[i])
    setTimeout(() => {
      loopFun(keys, i+1)
    }, num)
  }

  loopFun(Object.keys(obj))
}

module.exports = {
  solution
}
