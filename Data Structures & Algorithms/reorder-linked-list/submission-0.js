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
     * @return {void}
     */
    reorderList(head) {
        const stack = [];
        let current = head;

        while (current)
        {
            stack.push(current);
            current = current.next;
        }
        let finalHead;
        let front,back,previous;
        while(stack.length)
        {
            if (stack.length == 1)
            {
                back = stack.pop()
                if (!previous) finalHead = back;
                else previous.next = back;
                break;
            }
            front = stack.shift();
            back = stack.pop();
            if (!previous) finalHead = front;
            else previous.next = front;
            front.next = back;
            previous = back;

        }   
        back.next = null;
        return finalHead;


    }
}
