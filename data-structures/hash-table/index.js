class HashTable {
  #size;
  #count = 0;
  constructor(size = 20) {
    this.bucket = {};
    this.#size = size;
    this.#count = 0;
  }

  _hash(value) {
    let hashed = value
      .toString()
      .split("")
      .reduce((acc, curr) => {
        return acc + curr.charCodeAt();
      }, 0);

    return hashed % this.#size;
  }

  size() {
    return this.#count;
  }
  isEmpty() {
    return this.#count === 0;
  }

  set(value) {
    value = value.toLowerCase();
    const key = this._hash(value);
    if (this.bucket[key]) {
      const isExist = this.bucket[key].find((item) => item === value);
      if (isExist) {
        throw new Error(`This value "${value}" already exist`);
      }
      this.bucket[key].push(value);
    } else {
      this.bucket[key] = [value];
    }
  }

  get(value) {
    value = value.toLowerCase();
    const key = this._hash(value);
    if (this.bucket[key]) {
      const result = this.bucket[key].filter((item) => item === value);
      if (result.length) {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    value = value.toLowerCase();
    const key = this._hash(value);
    if (this.bucket[key]) {
      this.bucket[key] = this.bucket[key].filter((item) => item !== value);
      if (!this.bucket[key].length) delete this.bucket[key];
      return true;
    }
    throw new Error(`This value "${value}" not found`);
  }
  containsKey(key) {
    return this.bucket.hasOwnProperty(key);
  }
  clear() {
    this.bucket = {};
  }

  
}

const ht = new HashTable(20);

ht.set("sami");
ht.set("AHMED");
ht.remove("AHMED");

console.log(ht.get("ahmed"));

console.log(ht.containsKey(11));
