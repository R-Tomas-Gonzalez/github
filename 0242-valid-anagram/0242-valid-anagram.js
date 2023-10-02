/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let map = {};

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }

    for (let j = 0; j < t.length; j++) {
        let letter = t[j];
        if (map[letter] && map[letter] !== 0) {
            map[letter]--;
        } else {
            return false;
        }
    }   

    return true;
};
