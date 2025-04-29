class Stack {
  constructor() {
    this.items = [];
  }

  push = (data) => {
    if (data === undefined || data === null) {
      throw new Error("undefined or null is not accepted.");
    }
    this.items.push(data);
  };

  isEmpty = () => {
    return this.items.length === 0;
  };

  pop = () => {
    if (this.isEmpty()) {
      throw new Error("the stack is empty.");
    }
    this.items.pop();
  };

  peek = () => {
    if (this.isEmpty()) {
      throw new Error("the stack is empty");
    }
    return this.items[this.items.length - 1];
  };
}

const s = new Stack();
console.log(s.isEmpty());
s.push(1);
s.push(2);
s.push(3);
console.log("s : ", s);
s.pop();
console.log("s : ", s);
console.log(s.isEmpty());
