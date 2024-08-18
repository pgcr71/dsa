/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let newNode = new ListNode(null, null)
    let dummy = newNode;
    let list1curr = list1;
    let list2curr = list2;

    while (list1curr !== null && list2curr !== null) {
        if (list1curr?.val < list2curr?.val) {
            dummy.next = new ListNode(list1curr.val);
            dummy = dummy.next
            list1curr = list1curr.next
        }

        if (list2curr?.val < list1curr?.val) {
            dummy.next = new ListNode(list2curr.val);
            dummy = dummy.next
            list2curr = list2curr.next
        }
        if (list2curr?.val === list1curr?.val) {
            dummy.next = new ListNode(list1curr.val);
            dummy = dummy.next
            list1curr = list1curr.next;

            dummy.next = new ListNode(list2curr.val);
             dummy = dummy.next
            list2curr = list2curr.next;
           console.log(dummy)
        }
    }

    while (list1curr !== null) {
        dummy.next = new ListNode(list1curr.val);
        dummy = dummy.next;
        list1curr = list1curr.next
    }
    while (list2curr !== null) {
        dummy.next = new ListNode(list2curr.val);
        dummy = dummy.next;
        list2curr = list2curr.next
    }

    return newNode.next
};