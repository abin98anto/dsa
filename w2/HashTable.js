class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
    this.entries = 0;
    this.loadFactorLimit = 0.75;
  }

  hash = (key) => {
    let strKey = String(key);
    let hash = 0;

    for (let i = 0; i < strKey.length; i++) {
      hash = Math.abs((hash * 31 + strKey.charCodeAt(i)) % this.size);
    }

    return hash;
  };

  getLoadFactor = () => {
    return this.entries / this.size;
  };

  set = (key, value) => {
    if (this.getLoadFactor() > this.loadFactorLimit) {
      this.resize();
    }

    const hashedKey = this.hash(key);
    const bucket = this.table[hashedKey];

    if (bucket) {
      for (let entry of bucket) {
        if (entry.key == key) {
          entry.value = value;
          return;
        }
      }
    }
    bucket.push({ key, value });
    this.entries++;
  };

  resize = () => {
    const oldTable = this.table;
    this.size *= 2;
    this.table = new Array(this.size).fill(null).map(() => []);
    this.entries = 0;

    for (let bucket of oldTable) {
      for (let entry of bucket) {
        const hashedKey = this.hash(entry.key);
        this.table[hashedKey].push({ key: entry.key, value: entry.value });
        this.entries++;
      }
    }
  };

  get = (key) => {
    const hashedKey = this.hash(key);
    const bucket = this.table[hashedKey];

    for (let entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  };
}

const HT = new HashTable(5);
HT.set("name", "Abin Anto");
HT.set("age", 26);
console.log(HT.get("age"));
