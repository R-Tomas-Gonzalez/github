/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answerArr = [];

    for (let i = 0; i < nums.length; i++) {

        let leftPointer = i - 1;
        let rightPointer = i + 1;

        let sum = 1;

        while (leftPointer >= 0) {
            sum = sum * nums[leftPointer]
            leftPointer--;
        }

        while (rightPointer < nums.length) {
            sum = sum * nums[rightPointer]
            rightPointer++;
        }
        answerArr.push(sum);
    }

    return answerArr;

};


