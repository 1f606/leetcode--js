//  solutione one: for loop 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let total = 0
    for (let i = 0; i< nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            total++
        }
    }
    return total
};