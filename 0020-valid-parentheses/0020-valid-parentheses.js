/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 != 0) return false;
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!map[char]) {
            stack.push(char);
        } else {
            if (stack.length && stack[stack.length - 1] === map[char]) {
                stack.pop();
            } else {
                return false
            }
        }

    }

    return stack.length ? false : true;
};

// create a stack to go through this array
// a map will keep track of the opening and closing brackets

//if we come across a closing bracket, we need to make sure the opening bracket in the last item in the stack
//if it is we pop it off
//if our stacks.length is zero at the end, we have our answer