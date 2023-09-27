/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (numbers.length === 2) return [1, 2];

    let map = {};

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let diff = target - num;

        if (map[diff] || map[diff] === 0) {
            return [map[diff] + 1, i + 1];
        } else {
            map[num] = i;
        }
    }
};