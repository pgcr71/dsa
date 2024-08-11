var permute = function(nums) {
    let results = [];
permute1(nums, [],results)
return results;
}

var permute1 = function(nums, permutation, results) {
    if (nums.length === 0) {
       results.push(permutation)
    }
    
    for (var i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let previousNumbers = nums.slice(0, i);
        let nextNumbers = nums.slice(i+1)
        permute1([...previousNumbers, ...nextNumbers], [...permutation, currentNumber], results)
    }
    
};