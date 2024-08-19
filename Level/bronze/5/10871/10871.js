// input 숫자 배열에서 x보다 작은 수를 출력
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10871.txt");
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

let result = [];
let [n, x] = input[0].split(" ").map((num) => parseInt(num));
let numberArr = input[1].split(" ").map((num) => parseInt(num));

numberArr.filter((num) => num < x).forEach((num) => result.push(num));

console.log(result.join(" "));
