const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "11720.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);

let splitInput = input[1].split("").map(Number);
// console.log(splitInput);

let sum = 0;

for (let i = 0; i <= splitInput.length - 1; i++) {
  //   console.log(splitInput[i]);
  sum += splitInput[i];
}
console.log(sum);
