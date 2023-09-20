/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pointer1 = 0;
    let pointer2 = 1;

    let maxProfit = 0;

    while (pointer2 <= prices.length - 1) {
        if (prices[pointer2] < prices[pointer1]) {
            pointer1 = pointer2;
            pointer2++;
        } else {
            let profit = prices[pointer2] - prices[pointer1];
            maxProfit = Math.max(maxProfit, profit);
            pointer2++;
        }
    }

    return maxProfit;
};

//we need to keep track of 1st index
//we need to keep track of next index

//when do we want to move forward?
//we want to move our left pointer forward, if the number at our right number is less
//we want to move our right pointer forward ALWAYS, but we want to check our match when doing so
// return max at the end