const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1920.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((tr) => tr.trim());

let n = parseInt(input[0]);
let testCase1 = new Set(input.slice(1, 2)[0].split(" ").map(Number));
let ans = input.slice(3, 4)[0].split(" ").map(Number);

let result = [];

ans.forEach((num) => {
  if (testCase1.has(num)) {
    result.push(1);
  } else {
    result.push(0);
  }
});

console.log(result.join("\n"));
