/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();
  let y = x.split("").reverse().join("");
  return Boolean(x === y);
};
// @lc code=end
