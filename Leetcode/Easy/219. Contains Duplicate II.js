/* Incomplete
*/

// 219. Contains Duplicate II
// Easy

// 975

// 1119

// Add to List

// Share
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
// Accepted
// 286,204
// Submissions
// 753,370
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        // if (map[nums[i]]) {return true}
        // else {map[nums[i]] = true}
        
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;        
        console.log(map[nums[i]]);
        if (map[nums[i]] > 1) return true;
    }
    
    return false
};

containsNearbyDuplicate([1,2,3,1],3);
