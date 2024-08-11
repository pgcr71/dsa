function combine(n: number, k: number): number[][] {
let results = [];
let nums = new Array(n).fill(0).map((_,i) => i+1);
combine1(nums, [],results, k)
return results
};



var combine1 = function(nums, permutation, results, k) {
    if (permutation.length === k) {
       results.push(permutation)
    }
    
    for (var i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        // let previousNumbers = nums.slice(0, i);
        let nextNumbers = nums.slice(i+1)
        combine1([...nextNumbers], [...permutation, currentNumber], results, k)
    }
    
};