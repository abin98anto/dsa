class Queue {
  constructor() {
    this.items = [];
  }

  enqueue = (data) => {
    if (data === undefined || data === null) {
      throw new Error("data cannot be undefined or null");
    }
    this.items.push(data);
  };

  isEmpty = () => {
    return this.items.length === 0;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items.shift();
  };

  peek = () => {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.items[0];
  };
}

const q = new Queue();
console.log(q.isEmpty());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.peek;
console.log(q);
q.dequeue();
q.dequeue();
console.log(q);
