/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1 -> 2 -> 3 -> 4 -> null
// null <- 1  2  3 -> 4

var reverseList = function (head) {
    let prev = null;
    let curr = head;
    let next = head;
    while (next !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
};