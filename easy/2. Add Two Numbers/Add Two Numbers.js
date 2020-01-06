/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let left = ''
  let right = ''
  while (l1) {
    left = left + l1.val
    l1 = l1.next
  }

  while (l2) {
    right = right + l2.val
    l2 = l2.next
  }
  left = left.split('').reverse().join('')
  right = right.split('').reverse().join('')
  let result = BigInt(left) + BigInt(right)
  result = String(result).split('').reverse().join('')
  let resNode = null
  let temp = null
  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
      temp = new ListNode(result[i])
      resNode = temp
      continue
    }

    temp.next = new ListNode(result[i])
    temp = temp.next
  }
  return resNode
};