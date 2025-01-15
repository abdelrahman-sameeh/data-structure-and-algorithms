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

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
