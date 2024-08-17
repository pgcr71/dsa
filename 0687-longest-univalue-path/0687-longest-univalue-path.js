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
var longestUnivaluePath = function(root) {
   let level = 0;
   function DFS(parent, curr){
       if(curr === null) return 0;
       let left = DFS(curr.val, curr.left);
       let right = DFS(curr.val, curr.right);
       level = Math.max(level, left + right);
       return curr.val === parent ? Math.max(left, right) + 1 : 0;
   }    
   if(root !== null) DFS(root.val, root);
   return level;
};