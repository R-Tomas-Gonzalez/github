/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let num1 = 2;
    let num2 = 3;

    for (let i = 4; i <= n; i++) {
        let temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }

    return num2;

};

// subproblems
// we can either climb 1 or 2 stairs
// essentially this comes down to a dp problem.
// because it's a fib problem
// [ 1, 2, 3, 5, 8, 13]

// 2 stairs = 2
// 1 + 1
// 2

// 3 stairs = 3
// 1 + 1 + 1
// 2 + 1
// 1 + 2

// 4 stairs = 5
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 2
// 1 + 2 + 1
// 1 + 1 + 1 + 1

// 5 stairs = 8
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
// 1 + 2 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1
// 2 + 2 + 1
// 1 + 2 + 2
// 2 + 1 + 2