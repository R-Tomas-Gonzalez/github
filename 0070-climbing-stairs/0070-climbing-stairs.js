/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let dpArray = [2, 3];

    for (let i = 4; i <= n; i++) {
        let sum = dpArray[0] + dpArray[1];
        dpArray[0] = dpArray[1];
        dpArray[1] = sum
    }

    return dpArray[1];
};

// subproblems
// we can either climb 1 or 2 stairs
// essentially this comes down to a dp problem.
// because it's a fib problem
// [1, 1, 2, 3, 5, 8]

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