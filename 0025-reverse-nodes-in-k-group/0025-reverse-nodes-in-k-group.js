
    
    function length(head) {
        let temp = head;
        let count = 0;
        while (temp !== null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
    
    function reverseKGroup(head, k) {
        
        // Base Case : Empty or Single Node
        if (head === null || head.next === null) {
            return head;
        }
        
        const len = length(head);
        if (k > len) {
            return head;
        }
        
        // Step 1 : Reverse first k Nodes
        let prev = null;
        let curr = head;
        let nextNode = null;
        let count = 0;
        
        while (count < k) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
            count++;
        }
        
        // Step 2 : Recursive Call for remaining Nodes
        if (curr !== null) {
            head.next = reverseKGroup(curr, k);
        }
        
        // Step 3 : Return head of modified linked list
        return prev;
    }


