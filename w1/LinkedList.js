class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append = (data) => {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // this.tail.next = newNode;
      // this.tail = newNode;

      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.size++;
  };

  reverse = () => {
    let cur = this.head;
    let pre = null;
    this.tail = this.head;

    while(cur) {
        let nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }

    this.head = pre;
  }

  print = () => {
    let result = "";
    let cur = this.head;
    while (cur) {
      result += `${cur.data} -> `;
      cur = cur.next;
    }
    console.log(result + "null");
  };
}

console.log("linked list");
const LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.print();
LL.reverse();
LL.print();
