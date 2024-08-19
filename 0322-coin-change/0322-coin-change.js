/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
*/
var coinChange = function (coins, amount) {
    let arr = new Array(amount+1).fill(Infinity);
    arr[0] = 0;
    for (let coin of coins) {
        for (let j = coin; j <= amount; j++) {
            let remaining  = j - coin;
            arr[j] =  Math.min(arr[j], arr[remaining] + 1)
        }   
    }

    if(arr[amount] === Infinity) {
        return -1;
    }

    return arr[amount];
};