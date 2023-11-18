/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const hash = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    return items.reduce((result, item) => (item[hash[ruleKey]] === ruleValue) ? result += 1 : result, 0)
};