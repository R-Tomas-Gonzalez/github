/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let pointer1 = 0;
    let pointer2 = 0;

    let map = {};
    let count = 0;

    while (pointer2 < s.length) {
        let letter1 = s[pointer1];
        let letter2 = s[pointer2];

        if (!map[letter2]) {
            map[letter2] = letter2;
            pointer2++;
            count = Math.max(count, (pointer2 - pointer1));
        } else {
            delete map[letter1];
            pointer1++;
        }
    }

    return count;
};

/*
example
p1
p2
 v v
abcabc
let map = {
    'a' = 'a'
    'c' = 'c'
    'b' = 'b'
};

two pointer system
create a map
checks if letter is in map
initializes key and value to letter
increment pointer2 to keep going
check the max vs the distance
get rid of pointer1 in map
increment pointer1 until we get to a new non duplicate index
*/