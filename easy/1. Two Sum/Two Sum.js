//  Solution One: Brute-force Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i< nums.length; i++) {
      let diff = target - nums[i]
      for (let j = i+1; j < nums.length; j++) {
          if (nums[j] === diff) {
              return [i,j]
          }
      }
  }
};

//  Solution Two: Hash
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]
      if (temp[diff] !== undefined) {
          return [temp[diff], i]
      }
      temp[nums[i]] = i
  }
};