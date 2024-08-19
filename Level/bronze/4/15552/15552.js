// 빠른 A+B 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "15552.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(/\n/)
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

let testCase = Number(input[0]);
let results = [];
for (let i = 1; i <= testCase; i++) {
  let num = input[i].split(" ").map(Number);
  let result = num[0] + num[1];
  results.push(result);
}

console.log(results.join("\n"));
