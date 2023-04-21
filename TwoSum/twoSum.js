"use strict";

/**
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let iVal = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      let jVal = nums[j]

      if (iVal + jVal === target) return [i, j];
    }
  }
}

twoSum([1, 2, 3, 4, 5], 6);
