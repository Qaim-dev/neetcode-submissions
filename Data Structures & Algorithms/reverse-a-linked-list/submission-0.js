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
     * @return {ListNode}
     */
    reverseList(head) {

        if (!head?.next) return head;
        let current = head;
        const stack = [];
        while (current)
        {
            stack.push(current);
            current = current.next;
        }
        const newHead = stack.at(-1);
        let previous = null;
        current = null;
        while (stack.length)
        {
            current = stack.pop();
            if (previous) previous.next = current;
            previous = current;

            if (!stack.length) current.next = null
        }

        return newHead;






    }
}
