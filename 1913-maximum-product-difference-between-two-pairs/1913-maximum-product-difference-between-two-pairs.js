/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let a, b, c, d = 0

    const sortedNums = nums.sort((a, b) => a - b)

    a = sortedNums[0]
    b = sortedNums[1]
    c = sortedNums[sortedNums.length - 1]
    d = sortedNums[sortedNums.length - 2]

    return c * d - a * b
};