/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;

    let maxProfit = 0;

    while (right <= prices.length - 1) {
        let price1 = prices[left];
        let price2 = prices[right];

        if (price2 < price1) {
            left = right;
            right++;
        } else {
            maxProfit = Math.max(maxProfit, price2 - price1);
            right++;
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