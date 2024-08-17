/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */



var countNodes = function (root) {
    if(!root) {
        return 0
    }

    if(!root.left && !root.right) {
        return 1
    }
  return countNodesHelper(root)
};

var countNodesHelper = function (root) {
    let arr = [root];
    let count = 0;
    while(arr.length !== 0) {
        let curr = arr.pop();
        count++;
        if (curr?.left) {
            arr.push(curr.left)
        }
        if (curr?.right) {
            arr.push(curr.right)
        }

    }
    return count;
}