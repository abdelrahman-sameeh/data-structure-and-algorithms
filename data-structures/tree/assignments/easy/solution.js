function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// GPT Solution

var sortedArrayToBST = function (nums) {
  // Helper function to recursively build the tree
  const buildTree = (start, end) => {
    if (start > end) return null; // Base case: no elements to process

    const mid = Math.floor((start + end) / 2); // Find the middle element
    const node = new TreeNode(nums[mid]); // Create a new TreeNode with the middle value

    // Recursively build the left and right subtrees
    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);

    return node;
  };

  // Start building the tree using the entire range of the input array
  return buildTree(0, nums.length - 1);
};

let nums = [-10, -3, 0, 5, 9];
let tree = sortedArrayToBST(nums);
// console.log(tree);

/*********************************************************************** */
// 2- Find Mode in Binary Search Tree

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  const levelOrder = (root, dict) => {
    let queue = [root];
    while (queue.length) {
      const curr = queue.shift();
      if (dict[curr.val]) {
        dict[curr.val]++;
      } else {
        dict[curr.val] = 1;
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    let max = [+Object.entries(dict)[0][0]];
    Object.entries(dict).forEach(([key, value]) => {
      if (value == dict[max[0]] && key != max[0]) {
        max.push(+key);
      }
      if (value > dict[max[0]]) {
        max = [+key];
      }
    });
    return max;
  };
  let dict = {};
  return levelOrder(root, dict);
};

tree = new TreeNode(1, new TreeNode(1), new TreeNode(2, new TreeNode(2)));

// console.log(findMode(tree));

/*********************************************************************** */
// 3- Minimum Absolute Difference in BST

/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function (root) {
  let prev = null; 
  let min = Infinity; 

  function inOrder(node) {
    if (!node) return; 
    inOrder(node.left);
    if (prev !== null) {
      min = Math.min(min, node.val - prev); 
    }
    prev = node.val; 
    inOrder(node.right);
  }

  inOrder(root);
  return min;
};


tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);

console.log(getMinimumDifference(tree));
