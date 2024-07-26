class LinkedListNode {
  data: any;
  next: LinkedListNode;
  prev: LinkedListNode;
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;

  add(data, pos?: number) {
    const newLinkedList = new LinkedListNode(data);
    if (this.tail) {
      newLinkedList.prev = this.tail;
      this.tail.next = newLinkedList;
      this.tail = this.tail.next;
    }
    if (!this.head) {
      this.head = newLinkedList
      this.tail = newLinkedList
    }
    return this;

  }
  // getValues() {

  // }

  reverse() {
    let prev;
    let curr = this.head;
    let forw;
    while (curr != null) {
      forw = curr.next;
      curr.next = prev;
      prev = curr;
      curr = forw;
    }
  }

}

const x = new LinkedList();
x.add(10);
x.add(20);
x.add(30);
x.add(40);
x.add(50);
// console.log(x)
x.reverse()
console.log(x)