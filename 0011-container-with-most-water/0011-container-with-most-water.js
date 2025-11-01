/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right])
        let currArea = minHeight*width;
        area = Math.max(currArea, area);
        if(height[left] < height[right]) {
            left++
        } else {
            right--;
        }
    }
    return area;
};