/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!map[num]) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    let arr = [...Object.keys(map)].sort((a, b) => map[a] - map[b]);
    
    let count = 0;
    let result = [];

    while (count < k) {
        result.push(arr.pop());
        count++
    }

    return result
};