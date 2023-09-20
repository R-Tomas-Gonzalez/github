/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let newS = s.split('').sort().join('');
    let newT = t.split('').sort().join('');

    return newS === newT ? true : false;
    if (newS === newT) {
        return true;
    } else {
        return false;
    }
};
