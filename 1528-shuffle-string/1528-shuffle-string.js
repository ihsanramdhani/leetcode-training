/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    return s.split('').reduce((result, letter, idx) => {
      result.splice(indices[idx], 1, letter)
      return result
    }, new Array(s.length).fill(0)).join('')
};