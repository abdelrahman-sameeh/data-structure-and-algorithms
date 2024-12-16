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
// 8- equalStacks

const trimItemFromBigger = (h1, h2, h3) => {
  let h1Size = h1.reduce((item1, item2) => item1 + item2, 0);
  let h2Size = h2.reduce((item1, item2) => item1 + item2, 0);
  let h3Size = h3.reduce((item1, item2) => item1 + item2, 0);
  
  if(h1Size>h2Size && h1Size>h3Size){
    h1.shift()
  }else if(h2Size>h1Size && h2Size>h3Size){
    h2.shift()
  }else{
    h3.shift()
  }

  return {
    h1Size,
    h2Size,
    h3Size,
  };
};

function equalStacks(h1, h2, h3) {

  let h1Size = h1.reduce((item1, item2) => item1 + item2, 0);
  let h2Size = h2.reduce((item1, item2) => item1 + item2, 0);
  let h3Size = h3.reduce((item1, item2) => item1 + item2, 0);

  while(h1Size!=h2Size && h2Size!=h3Size){
    let {h1Size, h2Size, h3Size} = trimItemFromBigger(h1, h2, h3)
    if(h1Size == h2Size&&h2Size== h3Size){
      return h1Size
    }
  }

}

// const h1 = [3, 2, 1, 1, 1];
// const h2 = [4, 3, 2];
// const h3 = [1, 1, 4, 1];

const h1 = [];
const h2 = [];
const h3 = [];
console.log(equalStacks(h1, h2, h3));
