/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if (n <= 1) return n;

    let dpArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        let sum = dpArr[1] + dpArr[0];
        dpArr[0] = dpArr[1];
        dpArr[1] = sum;
    }


    return dpArr[dpArr.length - 1];
};

