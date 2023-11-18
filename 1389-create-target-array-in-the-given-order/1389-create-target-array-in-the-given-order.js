/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    return nums.reduce((result, num, idx) => {
        result.splice(index[idx], 0, num)
        return result}, [])
};