const getBinary = (num) => {
  let tmp = num
  const numbers = [];
  let rest = 0;

  while (num >= 0) {
    if (num == 0) {
      break;
    }

    let sqrt = Math.sqrt(num);

    if (sqrt > Math.floor(sqrt)) {
      if (num > 3) rest += 1;
      num -= 1;
      continue;
    } else if (sqrt == Math.floor(sqrt)) {
      numbers.push( sqrt );
      num = rest;
      rest = 0;
    }
  }

  let check = 0
  let result = ''
  for (let i = numbers[0]; i >= 0 ; i--) {
    if(numbers.includes(i)){
      if(i==1){
        check+=2
      }else{
        check+=i**2
      }
      
      result += "1"
    }else{
      result += "0"
    }
  }
  if(check!=tmp){
    result = result.slice(0, result.length - 1) + "1"
  }
  return result
};

console.log(getBinary(23));
console.log(getBinary(9));
console.log(getBinary(529));
console.log(getBinary(15));
console.log(getBinary(32));

/*
  get longest gap for binary 10001001 the longest gap is 3 
  get longest gap for binary 10001000 the longest gap is 3  
*/

function solution(n) {}

console.log(solution(9));
// console.log(solution(529));
// console.log(solution(15));
// console.log(solution(32));
