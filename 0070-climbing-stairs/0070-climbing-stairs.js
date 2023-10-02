/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let var1 = 2;
    let var2 = 3;
    
    for (let i = 4; i <= n; i++) {
        let temp = var1 + var2;
        var1 = var2;
        var2 = temp;
    }

    return var2
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