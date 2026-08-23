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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let current1 = list1;
        let current2 = list2;
        let head = (!current2 && !current1) ? null : !current1 ? current2 : !current2 ? current1 :  current1.val <= current2.val ? current1 : current2; 
        if (!head) return null
        let previous = null;
                    let smaller;

        while (current1 || current2)
        {
           if (!current1)
           {
             smaller = current2;
            current2 = current2.next;
           }
           else if (!current2)
           {
             smaller = current1;
            current1 = current1.next;

           }
           else if (current1.val <= current2.val)
           {
             smaller = current1;
            current1 = current1.next;
           }
              else if (current2.val <= current1.val)
           {
             smaller = current2;
            current2 = current2.next;
           }
            
            if (previous)
            {
                previous.next = smaller;
            }
            previous = smaller;
        }
        previous.next = null;

        return head;
    }
}
