/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let colors = [0,1,2,3,4,5];
    let startIndex = nums.length - 1;
    let count = 0;
    for(let color of colors) {
      moveZeroes(color);
    }

    function moveZeroes(color) {
        let nextAt = nums.length - 1;
        let sum = count;
        for(let i=nums.length-1; i>=count;i--) {
            if(nums[i] === color) {
                sum++;
                continue;
            }
            if (nums[i] !== nums[nextAt]) {
                let temp = nums[i];
                nums[i] = nums[nextAt];
                nums[nextAt] = temp;
            }
            nextAt--;
        }
        count = sum;
    }
};