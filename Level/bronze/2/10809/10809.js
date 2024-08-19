const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

const splitInput = input.map((line) => line.split(""));
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const result = new Array(26).fill(-1);
// console.log(result);
for (let i = 0; i < splitInput[0].length; i++) {
  const char = splitInput[0][i];
  const position = alphabet.indexOf(char);
  //   console.log(char);
  //   console.log(position);
  if (result[position] === -1) {
    result[position] = i;
  }
}

console.log(...result);
