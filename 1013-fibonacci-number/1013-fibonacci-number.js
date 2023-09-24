/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;

    if (n === 1) return 1;

    return (fib(n - 1) + fib(n - 2));
};

//fib(6) = 8
//(5) + (4) 
//fib(5) = 5
// 3  + 2 
//(4) + (3)
//fib(4) = 3
//(3) + (2)
//fib(3) = 2
//(2) + (1)
//fib(2) = 1
//(1) + (0)

