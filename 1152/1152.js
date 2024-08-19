const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split(" ")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

console.log(input.length);
