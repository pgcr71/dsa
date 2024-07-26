var findMaxAverage = function (nums, k) {
    if (nums.length === 0) {
        return 0;
    }
    if (k > nums.length) {
        return -1;
    }
    if (nums.length === k) {
        return nums.reduce((sum, next) => sum + next, 0) / k
    }
    let end = 0;
    let sum = 0;
    let maxavg = -Infinity;
    while (end < nums.length) {
        let avg = -Infinity;
        sum = sum + nums[end];
        if (end === k-1) {
            avg = sum / k;
            maxavg = avg > maxavg ? avg : maxavg
        }
        if(end >= k) {
            sum = sum - nums[end - k];
            avg = sum / k;
            maxavg = avg > maxavg ? avg : maxavg
        }

        end++;
    }
    return maxavg;
};

console.log(findMaxAverage([9,7,3,5,6,2,0,8,1,9], 6))