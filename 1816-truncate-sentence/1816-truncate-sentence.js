/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ').map((word, idx) => {
        if(idx < k) return word 
    }).filter(word => word != undefined).join(' ')
};