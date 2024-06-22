/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let list = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ")") {
      if (list[list.length - 1] === "(") {
        list.pop();
        continue;
      } else {
        return false;
      }
    }
    if (arr[i] === "}") {
      if (list[list.length - 1] === "{") {
        list.pop();
        continue;
      } else {
        return false;
      }
    }
    if (arr[i] === "]") {
      if (list[list.length - 1] === "[") {
        list.pop();
        continue;
      } else {
        return false;
      }
    }

    list.push(arr[i]);
  }
  if (list.length === 0) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
