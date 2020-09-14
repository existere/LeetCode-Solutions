/*
387. First Unique Character in a String
Easy

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

Accepted
584,037
Submissions
1,092,492
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map = {};
    
    for (ch of s) {
        map[ch] ? map[ch]++ : map[ch] = 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }
        
    return -1;
};