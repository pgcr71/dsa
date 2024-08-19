// 1) increment right pointer untill you find a duplicate
// 2) delete duplcate from map once you find the duplicate and increment left pointer
// 3)  refresh the sum



var lengthOfLongestSubstring = function (s) {
    let charMap = {};
    let left = 0;
    let right = 0;
    let maxLength = 0;
    while (right < s.length) {
       
        if(charMap[s[right]]) {
            delete charMap[s[left]];
            left++;
            continue
        }
        charMap[s[right]] = 1
        right++;
         maxLength = Math.max(maxLength, right-left);
    }
    
    return maxLength;
}