/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 배열이 비어 있는 경우 0을 반환
  if (nums.length === 0) return 0;

  // 고유 요소를 추적할 인덱스
  let k = 1;

  // 배열을 순회하면서 중복 요소를 건너뜀
  for (let i = 1; i < nums.length; i++) {
    // 현재 요소가 이전 요소와 다를 경우 고유 요소로 간주
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  // 고유 요소의 개수 반환
  return k;
};
// @lc code=end

console.log(removeDuplicates([1, 1, 2]));
