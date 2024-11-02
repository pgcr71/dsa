/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(!strs.length) {
        return ""
    }
    if (strs.length === 1) {
        return strs[0]
    }
    let left = 0;


    while (true) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (!strs[i][left] || (strs[i][left] !== strs[i + 1][left])) {
                return strs[0].substring(0, left);
            } 
        }
         left++;
    }

};