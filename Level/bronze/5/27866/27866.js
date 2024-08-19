const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "27866.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);

let splitInput = input[0].split("");
let count = Number(input[1]);

let index = count - 1;

console.log(`${splitInput[index]}`);
