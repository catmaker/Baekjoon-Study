// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최솟값을 찾는 프로그램을 작성하시오.
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2576.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map((el) => parseInt(el)));

let oddNumbers = [];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  if ((input[i] / 2) % 1) {
    oddNumbers.push(input[i]);
    sum += +input[i];
  }
}
if (oddNumbers.length > 0) {
  console.log(sum);
  console.log(Math.min(...oddNumbers));
} else {
  console.log(-1);
}
