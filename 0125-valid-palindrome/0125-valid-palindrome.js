/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.toLowerCase().match(/[a-z0-9]/g);

    if (!newS) return true;

    let pointer1 = 0;
    let pointer2 = newS.length - 1;

    while (pointer1 < pointer2) {
        if (newS[pointer1] !== newS[pointer2]) {
            return false;
        } else {
            pointer1++;
            pointer2--;
        }
    }

    return true;

};

//consider numbers, spaces, different cased letters, wierd characters
//we know it's a palindrome if a string has the same letters all the way down to the middle
//consider a pointer system
//create a pointer that keeps track of the start of the string
//create a pointer that keeps track with the end of the string
//consider a while loop to go through the entire string/array