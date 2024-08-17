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
var maxDepth = function (root) {

    //Function to find the height of a binary tree.


    if (!root) {
        return 0
    }
    let leftheight = maxDepth(root.left);
    let rightheight = maxDepth(root.right);
    return Math.max(leftheight, rightheight) + 1


};