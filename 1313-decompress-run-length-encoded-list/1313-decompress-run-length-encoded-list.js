/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    return nums.map((num, idx) => idx % 2 === 0 && new Array(num).fill(nums[idx+1])).filter(arr => arr !== false).flat()

};