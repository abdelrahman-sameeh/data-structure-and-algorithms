// 1- 506. Relative Ranks

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let heap = {};
  let tmp = JSON.parse(JSON.stringify(score));
  tmp.sort((a, b) => b - a);
  let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  tmp.forEach((item, index) => {
    if (index < 3) {
      heap[item] = medals[index];
    } else {
      heap[item] = `${index + 1}`;
    }
  });
  return score.map((item) => heap[item]);
};

// console.log(findRelativeRanks([10, 3, 8, 9, 4]));

// -----------------------------------------------------------
// 703. Kth Largest Element in a Stream

/**
 * @param {number} k
 * @param {number[]} nums
 * @ERROR__TIME_LIMITED_In_THIS_SOLUTION
 */
// var KthLargest = function (k, nums) {
//   this.k= k
//   this.nums = nums.sort((a,b) => b-a);
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   this.nums.push(val)
//   this.nums.sort((a,b) => b-a);
//   return this.nums[this.k-1]
// };

/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function (k, nums) {
//   this.k = k;
//   this.nums = nums.sort((a, b) => b - a);
//   this.targets = this.nums.slice(0, k);
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   if (this.targets[this.k - 1] != undefined) {
//     if (val > this.targets[this.k - 1]) {
//       this.targets.pop();
//       this.targets.push(val);
//       this.targets.sort((a, b) => b - a);
//       return this.targets[this.k - 1];
//     }
//     return this.targets[this.k - 1];
//   } else {
//     this.targets.push(val);
//     this.targets.sort((a, b) => b - a);
//     return this.targets[this.targets.length - 1];
//   }
// };



var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = [];
  nums.forEach((num) => this.add(num));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.push(val);
  this.minHeap.sort((a, b) => a - b); // ترتيب الهيب كـ Min-Heap

  if (this.minHeap.length > this.k) {
    this.minHeap.shift(); // إزالة أصغر عنصر
  }

  return this.minHeap[0]; // أصغر عنصر هو الـ kth الأكبر
};


// var obj = new KthLargest(1, []);

// console.log(obj.add(-3));
// console.log(obj.add(-2));
// console.log(obj.add(-4));
// console.log(obj.add(0));
// console.log(obj.add(4));

// [[1,[]],[-3],[-2],[-4],[0],[4]]

// -3 -3 -3 -2 0

/**
 * Your KthLargest object will be instantiated and called as such:
 * var param_1 = obj.add(val)
 */


// -----------------------------------------------------------
// 1046. Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 *
 */

function lastStoneWeight(stones) {
  const main = (arr, initial = false) => {
    if (initial) {
      arr.sort((a, b) => b - a); 
    }

    if (arr.length < 2) {
      return arr;
    }

    const stoneOne = arr[0];
    const stoneTwo = arr[1];

    if (stoneOne !== stoneTwo) {
      const tmp = Math.abs(stoneOne - stoneTwo);
      arr.splice(0, 2, tmp); 
    } else {
      arr.splice(0, 2); 
    }

    arr.sort((a, b) => b - a); 
    return main(arr);
  };

  const result = main(stones, true);
  return result.length > 0 ? result[0] : 0;
}

