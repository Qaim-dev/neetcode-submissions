/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let current = head;
        const stack = []
        while (current)
        {
            stack.push(current);
            current = current.next;
        }
        if (stack.length == 1)
        {
            return null;
        }
        let nextNode,nodeToRemove,prevNode;
        while (n > 1)
        {   
            nextNode = stack.pop();
            n--;
        }
        nodeToRemove = stack.pop();
        if (stack.length > 0)
        {
            prevNode = stack.pop();
            prevNode.next = nextNode??null;
        }
        else
        {
            return nextNode;
        }
 

        return head;





    }
}
