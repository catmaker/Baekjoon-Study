const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10818.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

let numberArr = input[1].split(" ").map((num) => parseInt(num));

let sortArr = numberArr.sort((a, b) => a - b);
console.log(sortArr[0], sortArr[sortArr.length - 1]);
