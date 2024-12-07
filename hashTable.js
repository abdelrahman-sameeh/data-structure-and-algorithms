class HashTable {
  constructor(size = 50) {
    this.hashMap = new Array(size);
    this.PRIME_NUMBER = 31;
  }

  _hash(key) {
    let hashedIndex = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let item = key[i];
      hashedIndex =
        (hashedIndex * this.PRIME_NUMBER + item.charCodeAt(0)) %
        this.hashMap.length;
    }
    return hashedIndex;
  }

  set(key, value) {
    const hashedIndex = this._hash(key);
    if (this.hashMap[hashedIndex]) {
      this.hashMap[hashedIndex].push({ key, value });
    } else {
      this.hashMap[hashedIndex] = [{ key, value }];
    }
    return this.hashMap;
  }

  has(key) {
    const hashedIndex = this._hash(key);
    if (this.hashMap[hashedIndex]) {
      const hasString = this.hashMap[hashedIndex].some(
        (item) => item.key === key
      );
      return hasString;
    }
    return false;
  }

  delete(key) {
    const hashedIndex = this._hash(key);
    if (this.hashMap[hashedIndex]) {
      const hasItem = this.hashMap[hashedIndex].some(
        (item) => item.key === key
      );
      if (!hasItem) return false;
      const newSeparateArr = this.hashMap[hashedIndex].filter(
        (item) => item.key !== key
      );
      this.hashMap[hashedIndex] = newSeparateArr;
      return true;
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i]) {
        this.hashMap[i].map((item) => keys.push(item.key));
      } else continue;
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i]) {
        this.hashMap[i].map((item) => values.push(item.value));
      } else continue;
    }
    return values;
  }
}

const hashTable = new HashTable();

hashTable.set("hello", "this is one");
hashTable.set("ollhe", "this is two");
hashTable.set("hello this is", "this is value three");
hashTable.set("hello this si", "this is value four");

// console.log(hashTable.hashMap);

// console.log(hashTable.has("hello this is"));

// console.log(hashTable.delete("hello this si"));
// console.log(hashTable.delete("hello this si"));
console.log(hashTable.keys());
console.log(hashTable.values());

// console.log(hashTable.hashMap);
