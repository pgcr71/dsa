var reverseKGroup = function(head, k) {
     let stack = [];
    let newNode = new ListNode(-1);
   ;
    let temp = newNode;
    
    while(head) {
        console.log(head)
        for(let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }
             console.log(head , "h")
        if(stack.length === k) {
            while(stack.length > 0) {
                temp.next = stack.pop();
                temp = temp.next;
            }
            temp.next = head;
        }
    }
    return newNode.next;
};