// 1- First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  let queue = {};
  for (const char of s) {
    if (queue[char]) {
      queue[char]++;
    } else {
      queue[char] = 1;
    }
  }

  const target = Object.entries(queue).find(([key, value]) => {
    return value === 1;
  });

  return s.indexOf(target && target[0]);
};

// console.log(firstUniqChar("aa"));
// console.log(firstUniqChar("loveleetcode"));

// -****************************************************************************
// 2- Number Of recent Queue
/**
 * @NOT_SOLVED
 */

var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function (t) {

};

const rec = new RecentCounter();
console.log(rec.ping(1177));
console.log(rec.ping(1485));
console.log(rec.ping(1563));
console.log(rec.ping(4056));
console.log(rec.ping(4150));
