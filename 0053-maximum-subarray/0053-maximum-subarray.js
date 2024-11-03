/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;
    for (let i in nums) {
        let n = nums[i];
        let redoStart = false;
        if(sum < 0) {
            sum = n;
            redoStart = true;
        } else {
            sum = sum + n;
        }

        if(sum >= max) {
            max = sum;
            if(redoStart) {
                startIndex = i;
                endIndex = i;
            } else {
                endIndex = i;
            }
           
        } 
    }
    console.log(startIndex, endIndex)
    return max;    
};