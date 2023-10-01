/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 0) return 0;

  let dp = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i+1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp[dp.length - 1];
};
   
//[1, 2, 3, 1]
//1, 3 -> 4
//2, 1 -> 3
//1, 1 -> 2

//[2, 7, 9, 3, 1]
//2, 9, 1 -> 12
//7, 3 -> 10
//7, 1 -> 8
//9, 1 -> 10
//2, 3 -> 5
//2, 1 - >3

//[100, 90, 10, 25, 16]
//100, 10, 16 -> 126
//100, 16 -> 116
//100, 25 -> 125
//90, 25 -> 115
//90, 16 -> 106
//10, 16 -> 26

//what is the subproblem?
//the subproblem is that we would have to check every possible combination,
//but there is an algorithm that can check and skip other possibilities.

