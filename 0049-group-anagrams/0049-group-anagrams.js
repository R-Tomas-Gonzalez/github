/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length === 1) return [strs]; 

    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join('');
        if (!map[sortedWord]) {
            map[sortedWord] = [strs[i]]
        } else {
            map[sortedWord].push(strs[i]);
        }
    }
    let answerArr = [];
    for (key in map) {
        answerArr.push(map[key]);
    }

    return answerArr;
};

