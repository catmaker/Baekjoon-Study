const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);

let [a, b, c] = input;
let multiplication = a * b * c;
// console.log(a, b, c);
let toStr = multiplication.toString().split("").map(Number);
// console.log(toStr);

let count = Array(10).fill(0);

toStr.forEach((num) => {
  count[num]++;
});

count.forEach((count, num) => {
  console.log(count);
});
