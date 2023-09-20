/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let pointer1 = 0;
    let pointer2 = 0;

    let maxSubstring = 0;

    let map = {}

    while(pointer2 < s.length) {
        if (!map[s[pointer2]]) {
            map[s[pointer2]] = s[pointer2];
            pointer2++;
            maxSubstring = Math.max(maxSubstring, (pointer2 - pointer1));
        } else {
            delete map[s[pointer1]];
            pointer1++;
        }
    }

    return maxSubstring;
};

// implement a sliding window technique
// we need to keep track of our letters and duplicates
// when we keep track of duplicates, we implement a hash set
// we keep track if there are any dupes in the hash
// and if there are, we increment first pointer