// CASE를 받아 두 정수의 합을 출력하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "11021.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

const testCase = input[0];
for (let i = 1; i <= testCase; i++) {
  let [a, b] = input[i].split(" ").map((num) => parseInt(num));
  console.log(`Case #${i}: ${a + b}`);
}
