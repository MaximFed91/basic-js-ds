const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.arr = [];
  }
  getUnderlyingList() {
    const l = new ListNode(this.arr[0]);
    let node = l;
    for (let i = 1; i< this.arr.length; i++){
      node.next = new ListNode(this.arr[i]);
      node = node.next;
    }
    return l;
  }

  enqueue(v) {
    this.arr.push(v);
  }

  dequeue() {
    return this.arr.shift();
  }

}
