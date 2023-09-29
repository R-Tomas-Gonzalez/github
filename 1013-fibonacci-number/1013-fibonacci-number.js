/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if (n <= 1) return n;

    let dpArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
        dpArr[0] = dpArr[i - 1];
        dpArr[1] = dpArr[i];
    }

    return dpArr[dpArr.length - 1];
};

