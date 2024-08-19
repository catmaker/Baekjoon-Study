const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10807.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

let numbers = input[1].split(" ").map((num) => parseInt(num));
let target = parseInt(input[2]);

let answer = numbers.filter((num) => num === target).length;
console.log(answer);
