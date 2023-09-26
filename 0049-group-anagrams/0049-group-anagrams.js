/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length === 1) return [strs];

    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split('').sort().join('');

        if (!map[sortedString]) {
            map[sortedString] = [strs[i]];
        } else {
            map[sortedString].push(strs[i]);
        }
    }

    return Object.values(map);
};



//edge cases
//we can see in example 2 and example 3 that if the strs are null or length of 1, we can return it

//help from leetcode 242 valid anagram solution
//strs[i].split('').sort().join('');

//create a map
//loop through the array
//return object.values;