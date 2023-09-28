/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, prevValues = []) {
    if (prevValues[n]) {
        return prevValues[n];
    }

    let result;
    if (n == 0) {
        result = 0;
    } else if (n <= 2) {
        result = 1;
    } else {
        result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
    }

    prevValues[n] = result;
    return result
};