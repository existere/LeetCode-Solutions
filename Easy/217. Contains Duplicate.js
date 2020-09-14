/*
217. Contains Duplicate
Easy

1064

768

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
Accepted
623,352
Submissions
1,108,824
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
        // console.log(map, map[nums[i]]);
        if (map[nums[i]] > 1) return true;
        
    }
    
    return false
};

/*
Success
Details 
Runtime: 96 ms, faster than 46.10% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 43.8 MB, less than 38.01% of JavaScript online submissions for Contains Duplicate.

Time Submitted
Status
Runtime
Memory
Language
09/13/2020 19:27	Accepted	96 ms	43.8 MB	javascript
*/