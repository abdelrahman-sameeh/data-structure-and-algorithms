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
  this.requests.push(t);
  let i = this.requests.length - 1;
  while (t - this.requests[i - 1] <= 3000 && this.requests[i - 1]) {
    i--;
  }
  this.requests = this.requests.slice(i);
  return this.requests.length;
};

// const rec = new RecentCounter();
// console.log(rec.ping(642));
// console.log(rec.ping(1849));
// console.log(rec.ping(4921));
// console.log(rec.ping(5936));
// console.log(rec.ping(5957));
// console.log(rec.ping(1));

// ********************************************************************
// 3- Number Of Students Unable to Eat Lunch
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students = [], sandwiches = []) {
  if (!students.length) return 0;
  let counter = 0;
  let stack = []
  while (true) {
    if (stack.length === students.length) break;
    top = students[0];
    if (top === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      stack = []
    } else {
      students.push(top);
      stack.push(top)
      students.shift();
      counter++;
    }
  }
  return students.length;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));