class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert = (word) => {
    let node = this.root;
    for (let char of word.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isWordEnd = true;
  };

  printAllWords = () => {
    const result = [];

    const dfs = (node, path) => {
      if (node.isWordEnd) result.push(path);

      for (const [char, child] of node.children) {
        dfs(child, path + char);
      }
    };

    dfs(this.root, "");
    return result;
  };

  search = (word) => {
    let node = this.root;
    for (let char of word.toLowerCase()) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return node.isWordEnd;
  };

  deleteWord = (word) => {
    let stack = [];
    let node = this.root;
    for (let char of word.toLowerCase()) {
      if (!node.children.has(char)) return;
      stack.push([node, char]);
      node = node.children.get(char);
    }
    if (!node.isWordEnd) return;
    node.isWordEnd = false; // logically deletes the word. The word won't appear in search() after this.

    for (let i = stack.length - 1; i >= 0; i--) {
      const [parent, char] = stack[i];
      const child = parent.children.get(char);
      if (child.children.size > 0 || child.isWordEnd) break;
      parent.children.delete(char);
    }
  };

  isPrefix = (prefix) => {
    let node = this.root;
    for (let char of prefix.toLowerCase()) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return true;
  };
}

const T = new Trie();
T.insert("Hey");
T.insert("hey");
T.insert("hello");
T.insert("Hi");
console.log(T.printAllWords());
// T.deleteWord("hey");
console.log(T.printAllWords());
console.log(T.isPrefix("he"));
// console.log(T.search("hey"));
// console.log(T.search("heyo!"));
