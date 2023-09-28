/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, prevNums = []) {

  if(prevNums[n]) {
    return prevNums[n];
  }

  let result;

  if (n === 1) {
    result = 1;
  } else if (n === 2) {
    result = 2;
  } else {
     result = climbStairs(n - 1, prevNums) + climbStairs(n - 2, prevNums);
  };

  prevNums[n] = result;

  return result;

};