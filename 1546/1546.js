const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1546.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);
let count = Number(input[0]);
// console.log(count);
let score = input[1].split(" ").map(Number);
// console.log(score);
let maxScore = Math.max(...score);
// console.log(maxScore);
let result = [];
score.forEach((score) => result.push((score / maxScore) * 100));
// console.log(result);
let sum = 0;
for (let i = 0; i <= result.length - 1; i++) {
  sum += result[i];
}
console.log(sum / result.length);
