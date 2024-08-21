const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "7568.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let testCaseCount = Number(input[0]);

let testCase = input
  .slice(1)
  .map((spl) => spl.split(" "))
  .map((numArr) => numArr.map((num) => Number(num)));
let ranks = [];
for (let i = 0; i < testCaseCount; i++) {
  let rank = 1;
  for (let j = 0; j < testCaseCount; j++) {
    if (i !== j) {
      if (testCase[i][0] < testCase[j][0] && testCase[i][1] < testCase[j][1]) {
        rank++;
      }
    }
  }
  ranks.push(rank);
}
console.log(ranks.join(" "));

// 이중 반복문 잘 이용하기
