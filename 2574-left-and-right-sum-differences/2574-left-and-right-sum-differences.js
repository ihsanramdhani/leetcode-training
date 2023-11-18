/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    return result =  nums.map((num, idx) => {
        const leftSum = nums.reduce((leftSum, num, i) => i < idx ? leftSum += num : leftSum, 0)
        const rightSum = nums.reduce((rightSum, num, i) => i < nums.length && i > idx ? rightSum += num : rightSum, 0)
        return Math.abs(leftSum - rightSum)
    })
}

