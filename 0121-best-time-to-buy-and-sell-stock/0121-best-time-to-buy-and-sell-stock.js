/**
 * @param {number[]} prices
 * @return {number}
 */

//  method1 (brute force)
// var maxProfit = function (prices) {
//     let max = 0;
//     for (let day = 0; day < prices.length; day++) {
//         let priceOnCurrentDay = prices[day];
//         for (let futureDay = day + 1; futureDay < prices.length; futureDay++) {
//             let priceonFutureDay = prices[futureDay];
//             let priceDiff = priceonFutureDay - priceOnCurrentDay;
//             if((priceonFutureDay > priceOnCurrentDay) && priceDiff > max) {
//                 max = priceDiff;
//             }
//         }
//     }
//     return max;
// };

var maxProfit = function (prices) {
        let buy = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < buy) {
                buy = prices[i];
            } else if (prices[i] - buy > profit) {
                profit = prices[i] - buy;
            }
        }
        return profit;
    }