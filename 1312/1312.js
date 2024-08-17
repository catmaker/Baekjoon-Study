// 피제수와 제수를 나누었을 때 n번째 자리의 수를 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1312.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((el) => parseInt(el));

let testFloat = input[2];
let a = input[0];
let b = input[1];
let result = a % b;
let digit;

for (let i = 0; i < testFloat; i++) {
  result *= 10;
  digit = Math.floor(result / b);
  result = result % b;
}
console.log(digit);
