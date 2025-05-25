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

  inorder = (cur = this.root, res = []) => {
    if (cur) {
      this.inorder(cur.left, res);
      res.push(cur.value);
      this.inorder(cur.right, res);
    }
    return res;
  };

  inorder2 = (cur = this.root, res = "") => {
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

  deepestNode = () => {
    const q = [this.root];
    let cur = null;
    while (q.length > 0) {
      cur = q.shift();
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
    return cur;
  };

  delete = (value) => {
    if (!this.root) return null;
    if (!this.root.left && !this.root.right) {
      return this.root.value === value ? (this.root = null) : null;
    }

    let targetNode = null;
    let lastNode = null;
    let parentOfLastNode = null;
    const q = [this.root];

    while (q.length) {
      const cur = q.shift();
      if (cur.value === value) {
        targetNode = cur;
      }
      if (cur.left) {
        parentOfLastNode = cur;
        lastNode = cur.left;
        q.push(cur.left);
      }
      if (cur.right) {
        parentOfLastNode = cur;
        lastNode = cur.right;
        q.push(cur.right);
      }
      lastNode = cur;
    }

    if (targetNode) {
      targetNode.value = lastNode.value;

      if (parentOfLastNode) {
        if (parentOfLastNode.right === lastNode) {
          parentOfLastNode.right = null;
        } else if (parentOfLastNode.left === lastNode) {
          parentOfLastNode.left = null;
        }
      } else {
        return null;
      }
    }

    return this.root;
  };

  getHeight = (cur = this.root) => {
    if (!cur) return -1;
    const left = this.getHeight(cur.left);
    const right = this.getHeight(cur.right);
    return Math.max(left, right) + 1;
  };

  getDepth = (target, cur = this.root, depth = 0) => {
    if (!cur) return -1;
    if (cur.value === target) return depth;
    const left = this.getDepth(target, cur.left, depth+1);
    if (left !== -1) return left;
    return this.getDepth(target, cur.right, depth+1);
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
// console.log(BT.inorder2());
// console.log(BT.preorder());
// console.log(BT.search(10));
// console.log(BT.search(3));
// console.log(BT.deepestNode());
// console.log(BT.bfs());
// BT.delete(1);
// console.log(BT.bfs());
// console.log(BT.getHeight());
console.log(BT.getDepth(7));
