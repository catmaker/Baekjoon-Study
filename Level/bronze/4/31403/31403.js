const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "31403.txt");
const file = process.platform === "linux" ? "dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

console.log(Number(input[0]) + Number(input[1]) - Number(input[2]));
console.log(input[0] + input[1] - Number(input[2]));
