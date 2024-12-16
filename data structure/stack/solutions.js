/**
 * @SOLVED 
*/
// 1- isBalanced
function isBalanced(s) {
  const dict = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const stack = [];

  s.split("").forEach((char) => {
    if (dict[char] === stack[stack.length - 1] && stack.length) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });

  return !stack.length ? "YES" : "NO";
}

// console.log(isBalanced("[](())(){}")); YES
// console.log(isBalanced("[]((]}(){)")); No

/*********************************************************************** */
/**
 * @SOLVED 
 */
// 2- equalStacks
function equalStacks(h1, h2, h3) {
  let size1 = 0,
    size2 = 0,
    size3 = 0,
    maxSize = 0;
  while (true) {
    if (size1 === size2 && size2 === size3) maxSize = size1;
    if (!h1.length && !h2.length && !h3.length) {
      break;
    }
    
    if (size1 <= size2 && size1 <= size3 && h1.length) {
      size1 += h1.pop();
    } else if (size2 <= size1 && size2 <= size3 && h2.length) {
      size2 += h2.pop();
    } else if (size3 <= size1 && size3 <= size2 && h3.length) {
      size3 += h3.pop();
    }else break
  }

  return maxSize;
}

const h1 = [3, 2, 1, 3];
const h2 = [4, 3, 2];
const h3 = [1, 3, 4, 1];

// const h1 = [2, 1, 1, 1, 3];
// const h2 = [4, 3, 5];
// const h3 = [1, 1, 1, 1, 1];

console.log(equalStacks(h1, h2, h3));

/*********************************************************************** */
/**
 * @NOT_SOLVED
 */
// 3- twoStacks

function twoStacks(maxSum, a, b) {
  let count = 0,
    result = 0;

  while (true) {
    if (result + a[0] < maxSum) {
      count++;
      result += a[0];
      a.shift();
    } else if (result + b[0] < maxSum) {
      count++;
      result += b[0];
      b.shift();
    } else {
      break;
    }
  }
  console.log(result);

  return count;
}

const arr1 = [4, 2, 4, 6, 1];
const arr2 = [2, 1, 1, 1];

// console.log(twoStacks(10, arr1, arr2));
