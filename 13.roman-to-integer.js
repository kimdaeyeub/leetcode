/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//왼쪽숫자가 오른쪽 숫자보다 커야함.
// 왼쪽숫자가 오른쪽 숫자보다 작으면 두 수의 차를 사용.
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  s = s.split("");
  let arr = s.map((item) => obj[item]);
  let answer = 0;
  let index = 0;
  while (index <= arr.length - 1) {
    if (arr[index] >= arr[index + 1] || index === arr.length - 1) {
      answer += arr[index];
      index++;
    } else {
      answer += arr[index + 1] - arr[index];
      index += 2;
    }
  }
  return answer;
};

// @lc code=end
