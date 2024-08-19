// 두 항의 곱과 나머지 항의 곱의 차를 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "28444.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((el) => parseInt(el));

// 첫번째 항과 두번째 항을 곱한다.
let first = input[0] * input[1];
// 나머지 항을 곱한다.
let second = input[2] * input[3] * input[4];
// 두 결과를 뺀다.
let result = first - second;

console.log(result);
