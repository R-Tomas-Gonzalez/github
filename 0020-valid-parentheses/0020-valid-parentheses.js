/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!map[char]) {
            stack.push(char);
        } else if (stack[stack.length - 1] === map[char]) {
            stack.pop();
        } else if (stack[stack.length - 1] !== map[char]) {
            return false;
        }
    }

    return stack.length ? false : true;
};

// create a stack to go through this array
// a map will keep track of the opening and closing brackets



//if we come across a closing bracket, we need to make sure the opening bracket in the last item in the stack
//if it is we pop it off
//if our stacks.length is zero at the end, we have our answer