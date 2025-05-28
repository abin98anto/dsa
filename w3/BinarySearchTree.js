class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return; // duplicate check.

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  };

  inorder = (cur = this.root, res = []) => {
    if (!cur) return null;
    this.inorder(cur.left, res);
    res.push(cur.value);
    this.inorder(cur.right, res);
    return res;
  };

  preorder = (cur = this.root, res = []) => {
    if (!cur) return null;
    res.push(cur.value);
    this.preorder(cur.left, res);
    this.preorder(cur.right, res);
    return res;
  };

  postorder = (cur = this.root, res = []) => {
    if (!cur) return null;
    this.postorder(cur.left, res);
    this.postorder(cur.right, res);
    res.push(cur.value);
    return res;
  };
}

const bbb = new BST();
bbb.insert(1);
bbb.insert(2);
bbb.insert(3);
bbb.insert(4);
bbb.insert(5);
bbb.insert(6);
console.log(bbb.inorder());
console.log(bbb.preorder());
console.log(bbb.postorder());
