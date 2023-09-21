/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pointer1 = 0;
    let pointer2 = 1;

    let maxProfit = 0;

    while (pointer2 < prices.length) {
        let price1 = prices[pointer1];
        let price2 = prices[pointer2];

        if (price2 < price1) {
            pointer1 = pointer2;
            pointer2++;
        } else {
            maxProfit = Math.max(maxProfit, price2 - price1);
            pointer2++
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