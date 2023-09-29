/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let dpArr = [ 2, 3 ];

    for (let i = 4; i <= n; i++) {
        let sum = dpArr[0] + dpArr[1];
        dpArr[0] = dpArr[1];
        dpArr[1] = sum;
    }

    return dpArr[1];
};

// subproblems
// we can either climb 1 or 2 stairs
// essentially this comes down to a dp problem.
// because it's a fib problem
// [1, 1, 2, 3, 5, 8, 13]


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