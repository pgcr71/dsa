/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  method1 (brute force)
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let remaining = target - nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             if ((i !== j) && (remaining === nums[j])) {
//                 return [i, j]
//             }
//         }
//     }
// };

//Method2 ()

var twoSum = function (nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        if (hash[remaining] && (hash[remaining] !== i)) {
            return [i, hash[remaining]]
        }
    }
};
