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
 * @param {number} target
 * @return {TreeNode}
 */


    // //         1
    //          /   \
    // //     2     3
    //     /         / \
    // // 2          2 4  

var removeLeafNodes = function(root, target) {
        if(!root) {
            return null;
        }

        root.left = removeLeafNodes(root.left, target)
        root.right = removeLeafNodes(root.right, target)
        if(!root.left && !root.right && (root.val === target)) {
            return  null
        }
        return root
};