/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!map[char]) {
            stack.push(char);
        } else if (map[char] === stack[stack.length - 1 ]) {
            stack.pop()
        } else if (map[char] !== stack[stack.length - 1]) {
            return false;
        }
    }

    console.log(stack);

    return stack.length ? false : true;

};

// if there is an odd number of brackets, return false; Because in order to have valid parenthesis we need to have even number parens
// we want to create a map, to keep track of our parenthesis

    // let map = {
    //     ')':'(',
    //     '}':'{',
    //     ']':'['
    // }

// we want to keep a stack to keep track of our open parens

// for loop, to iterate through the array
// variable to keep track of our character

// conditional
// if the character is an opening paren and not a closing paren, we add it to the stack
// if the current character is a closing bracket and it's value ( the matching opening bracket )is the last character, pop it off the stack
// if it is not the matching character, return false;

// at the very end, return whether or not we've been left with any opening brackets in the stack