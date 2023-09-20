/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Example 1
    /*
      if (nums.length === 2) return [0, 1];

      for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++){
              if (nums[i] + nums[j] === target) {
                  return [i, j]
              }
          }
      }
    */
    
    //Example 2
    if (nums.length === 2) return [0, 1];

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;

        if (map[diff] || map[diff] === 0) {
            return [map[diff], i];
        } else {
            map[num] = i;
        }
    }
};

//Example 1
//create a nested for loop
//first loop keeps track of the first number
//second loop keeps track of the second
//so on and so forth


//Example 2
// instead of trying to find two numbers that equal the target
// we're going to keep track of each num and store it in the map, with it's index
// then, we're going to check if the diff is already in the map 
// and if it is, we're going to return an arr with map[diff] value, and our current index