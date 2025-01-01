// 1- twoSum
/**
 * @SOLVED
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (
    nums.length === 2 &&
    nums.reduce((acc, curr) => acc + curr, 0) === target
  ) {
    return [0, 1];
  }
  let p1 = 0,
    p2 = 1,
    sum = nums[0] + nums[1];

  while (true) {
    console.log(p1, p2);

    if (p1 === p2) {
      p2++;
      sum = nums[p1] + nums[p2];
      continue;
    }

    if (target === sum) return [p1, p2];
    if (sum < target && nums[p1] >= nums[p2]) {
      p2++;
      sum = nums[p1] + nums[p2];
      continue;
    }

    if (sum < target && nums[p1] < nums[p2]) {
      p1++;
      sum = nums[p1] + nums[p2];
      continue;
    }

    if (sum > target) {
      //[4, 2, 3]

      if (nums[p2] > nums[p1] && p2 == nums.length - 1) {
        p1++;
      }
      // else if(nums[p1]>nums[p2] && p2==nums.length-1){
      //   p2++;
      // }
      else if (nums[p2] > nums[p1]) {
        p2++;
      } else if (nums[p1] > nums[p2]) {
        p1++;
      }
      sum = nums[p1] + nums[p2];
      continue;
    }
  }
};

var twoSum = function (nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[target - nums[i]] != undefined) {
      return [i, dict[target - nums[i]]];
    }
    dict[nums[i]] = i;
  }
};

// console.log(twoSum([3,3], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([2, 5, 5, 11], 10));
// console.log(twoSum([0,4,3,0], 0));
// console.log(twoSum([-1, -2, -3, -4, -5], -8));

// -----------------------------------------------------------------------------
// 2-  Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumsTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (!s[i + 1]) {
      result += romanNumsTable[s[i]];
    } else {
      if (romanNumsTable[s[i]] >= romanNumsTable[s[i + 1]]) {
        result += romanNumsTable[s[i]];
      } else {
        result += romanNumsTable[s[i + 1]] - romanNumsTable[s[i]];
        i++;
      }
    }
  }
  return result;
};

// console.log(romanToInt("MCMXCIV"));

// -----------------------------------------------------------------------------
// 3- Linked List Cycle
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while(fast&&fast.next){
    fast = fast.next.next;
    slow = slow.next
    if(slow==fast){
      return true
    }
  }
  return false
};

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null

console.log(hasCycle(node1));

