/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let head:ListNode = new ListNode(0);
    let curr:ListNode = head;
    let carry: number = 0;
    
    while( l1 || l2 ){
        let l1val: number = l1 ? l1.val:0;
        let l2val: number = l2 ? l2.val:0;
         
        let sum: number = l1val + l2val + carry;
        // reset carry
        carry = 0;
        let newVal: number = sum;
        // if sum is greater than 10 then we need to carry over the remainder
        if ( sum > 9){
            newVal = sum % 10;
            carry = 1;
        }
        // create a new node and set our curr pointer from our current node to the newly created node
        curr.next = new ListNode(newVal);
        // advance our curr pointer to the new node
        curr = curr.next;

        // traversing our provided LinkedLists if nodes still exist
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    // if a carry still exist, then create a new ListNode to hold said value
    if (carry != 0){
        curr.next = new ListNode(carry);
    }
    // we point to our 2nd node since that's where it actually starts! the header node is just a placeholder
    return head.next;
    
};

