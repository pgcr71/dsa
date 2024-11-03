/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;

    for (let n of nums) {
        if(sum < 0) {
            sum = n
        } else {
            sum = sum + n;
        }
        
        res = Math.max(sum, res)
    }
    
    return res;    
};