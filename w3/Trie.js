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

      for (const [char,child] of node.children) {
        dfs(child, path + char);
      }
    };

    dfs(this.root, "");
    return result;
  };
}

const T = new Trie();
T.insert("Hey");
T.insert("hey");
T.insert("hello");
T.insert("Hi");
console.log(T.printAllWords());
