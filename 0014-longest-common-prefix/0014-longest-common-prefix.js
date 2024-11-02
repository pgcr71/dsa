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
    let outofInex = false;
    let left = 0;
    let ind = 0;

    while (true) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (!strs[i]) {
                return ""
            }
            if(!strs[i][left]) {
                return strs[0].substring(0, left);
            }
            if ((strs[i][left] !== strs[i + 1][left])) {
                return strs[0].substring(0, left);
            }
           
        }
         left++;
    }

};