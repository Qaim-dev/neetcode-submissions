class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {



        let l =0;
        let maxProfit = 0;
        let previous = prices[0];
        for (let r = 1;r<prices.length;r++)
    {

            const profit = prices[r] - prices[l];
            maxProfit = Math.max(profit,maxProfit);
            if (prices[r] < previous) //move here
            {
                previous = prices[r];
                l = r;
            }
        }
            return Math.max(0,maxProfit);

    }
}
