// n까지의 합을 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "8393.txt");

const input = fs.readFileSync(filePath).toString().trim();

let n = Number(input);
let result = 0;
for (let i = 1; i <= n; i++) {
  result = result + i;
}
console.log(result);
