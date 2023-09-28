/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pointer1 = 0;
    let pointer2 = nums.length - 1;

    while (pointer1 <= pointer2) {
        let mid = Math.floor((pointer1 + pointer2) / 2)
        console.log(nums[mid]);
        if (nums[mid] < target) {
            pointer1 = mid + 1;
        } else if (nums[mid] > target) {
            pointer2 = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};