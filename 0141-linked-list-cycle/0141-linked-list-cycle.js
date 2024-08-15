/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let weakMap = new WeakMap();
    let next = head;
    while ((next !== null)) {
        if (weakMap.has(next)) {
            return true;
        }
        weakMap.set(next)
        next = next.next;
    }
    return false;
};