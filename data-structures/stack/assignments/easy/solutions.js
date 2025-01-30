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
    } else break;
  }

  return maxSize;
}

const h1 = [3, 2, 1, 3];
const h2 = [4, 3, 2];
const h3 = [1, 3, 4, 1];

// const h1 = [2, 1, 1, 1, 3];
// const h2 = [4, 3, 5];
// const h3 = [1, 1, 1, 1, 1];

// console.log(equalStacks(h1, h2, h3));

/*********************************************************************** */
/**
 * @SOLVED
 */
// 3- Game of Two Stacks
function twoStacks(maxSum, arr1, arr2) {
  let count1 = 0,
    count2 = 0,
    sum = 0,
    maxCount = 0;

  for (const el of arr1) {
    if (sum + el <= maxSum) {
      sum += el;
      count1++;
    } else {
      break;
    }
  }

  maxCount = count1;

  for (const el of arr2) {
    if (sum + el <= maxSum) {
      sum += el;
      count2++;
    } else {
      while (sum + el > maxSum && count1 > 0) {
        count1--;
        sum -= arr1[count1];
      }

      if (sum + el <= maxSum) {
        sum += el;
        count2++;
      } else {
        break;
      }
    }

    maxCount = Math.max(maxCount, count1 + count2);
  }

  return maxCount;
}

const arr1 = [4, 2, 4, 6, 1];
const arr2 = [2, 1, 5, 1];
// const arr1 = [2, 1, 3, 3, 3, 1];
// const arr2 = [4, 1, 1, 1, 1];

// console.log(twoStacks(10, arr1, arr2));

/*********************************************************************** */
// 4- Largest Rectangle

// solution 1 >>> Big-o(n^2) >>> not optimal solution >>> (Use nested loops)
// function largestRectangle(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) {
//         sum += arr[i];
//       } else {
//         if (max < sum) max = sum;
//         sum = 0;
//       }
//     }
//     if (sum > 0 && sum > max) max = sum;
//   }
//   return max;
// }

// solution 2 >>>> Big-o(n) >>>> Use two pointer technique
// function largestRectangle(arr) {
//   let max = 0,
//     sum = 0,
//     p1 = 0,
//     p2 = 0

//   while (true) {
//     if (p2 === p1 && p1 == arr.length - 1) {
//       break;
//     }

//     if (arr[p2] >= arr[p1]) {
//       sum += arr[p1];
//       p2++;
//       continue;
//     }

//     if (arr[p1] > arr[p2] && p2 > p1) {
//       max = Math.max(max, sum);
//       p2++;
//       sum = 0;
//       continue;
//     }

//     if (arr[p1] > arr[p2] && p1 > p2) {
//       max = Math.max(max, sum);
//       p2++;
//       sum = 0;
//       continue;
//     }

//     if (p1 != p2 && p2 === arr.length) {
//       max = Math.max(sum, max);
//       p2 = 0;
//       p1++;
//       sum = 0;
//     }
//   }
//   return max;
// }

// Solution 3 using stack technique
function largestRectangle(arr) {
  let maxArea = 0;
  const stack = [];
  let i = 0;

  while (i < arr.length) {
    if (stack.length === 0 || arr[i] >= arr[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      const top = stack.pop();
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, arr[top] * width);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop();
    const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, arr[top] * width);
  }

  return maxArea;
}

// console.log(largestRectangle([2, 1, 2, 3, 2, 1, 2]));
// console.log(largestRectangle([1, 2, 3, 4, 5]));
// console.log(largestRectangle([2, 1, 2, 3, 2]));

/*********************************************************************** */
// 5- Simple Text Editor

function processData(input) {
  // الجزء دا عشان موقع hackerrank
  // انما احنا بنبعت ك array directly
  //----------------------------
  // input = input.split('\n')
  //----------------------------

  let string = "";
  const stack = [];

  for (const item of input) {
    const [opt, data] = item.split(" ");

    if (opt === "1") {
      stack.push({
        opt,
        index: string.length,
      });
      string += data;
    } else if (opt === "2") {
      stack.push({
        opt,
        deletedString: string.slice(string.length - +data),
      });
      string = string.slice(0, string.length - +data);
    } else if (opt === "3") {
      console.log(string[+data - 1]);
    } else if (opt === "4") {
      const top = stack.pop();
      if (top.opt === "1") {
        string = string.slice(0, top.index);
      } else if (top.opt === "2") {
        string += top.deletedString;
      }
    }
  }
}

// processData(["1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"]);

/*********************************************************************** */
// 6- Poisonous Plants
/**
 * @NOT_ACCEPTED
 */

function poisonousPlants(arr) {
  function main(arr, numberOfDays = 0) {
    const stack = [arr[0]];
    let good = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) {
        stack.push(arr[i]);
      } else {
        good = false;
      }
    }

    if (good) {
      return numberOfDays;
    } else {
      return main(stack, numberOfDays + 1);
    }
  }

  return main(arr);
}

/**
 * @@CHAT_GPT_SOLUTION
 * @NOT_ACCEPTED
 */

function poisonousPlants(arr) {
  let days = 0;

  while (true) {
    const survivors = [arr[0]];
    let plantsDied = false;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) {
        survivors.push(arr[i]);
      } else {
        plantsDied = true;
      }
    }

    if (!plantsDied) {
      break;
    }

    arr = survivors;
    days++;
  }

  return days;
}

// console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9]));
// console.log(poisonousPlants([3, 6, 2, 7, 5]));
// console.log(poisonousPlants([1, 1, 1, 1, 1]));
