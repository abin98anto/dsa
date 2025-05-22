class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinraryTree {
  constructor() {
    this.root = null;
  }

  isEmpty = () => {
    return this.root === null;
  };

  insert = (value) => {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return;
    }

    const q = [this.root];
    while (q.length > 0) {
      const cur = q.shift();
      if (cur.left === null) {
        cur.left = newNode;
        return;
      } else if (cur.right === null) {
        cur.right = newNode;
        return;
      } else {
        q.push(cur.left);
        q.push(cur.right);
      }
    }
  };

  bfs = () => {
    const q = [this.root];
    let res = "";
    while (q.length > 0) {
      const cur = q.shift();
      res += `${cur.value} -> `;
      if (cur.left) q.push(cur.left);
      if (cur.right) q.push(cur.right);
    }
    res += "end";
    return res;
  };

  inorder = (cur = this.root, res = "") => {
    if (cur) {
      res = this.inorder(cur.left, res);
      res += `${cur.value} -> `;
      res = this.inorder(cur.right, res);
    }
    return res;
  };

  preorder = (cur = this.root, res = "") => {
    if (cur) {
      res += `${cur.value} -> `;
      res = this.inorder(cur.left, res);
      res = this.inorder(cur.right, res);
    }
    return res;
  };

  postorder = (cur = this.root, res = "") => {
    if (cur) {
      res = this.postorder(cur.left, res);
      res = this.postorder(cur.right, res);
      res += `${cur.value} -> `;
    }
  };

  search = (target, cur = this.root) => {
    if (cur === null) return false;
    if (cur.value === target) return true;
    return this.search(target, cur.left) || this.search(target, cur.right);
  };
}

const BT = new BinraryTree();
// console.log(BT.isEmpty());
BT.insert(1);
BT.insert(2);
BT.insert(3);
BT.insert(4);
BT.insert(5);
BT.insert(6);
BT.insert(7);
// console.log(BT.bfs());
// console.log(BT.inorder());
// console.log(BT.preorder());
console.log(BT.search(10));
console.log(BT.search(3));
