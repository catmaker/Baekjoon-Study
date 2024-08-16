// 주어진 숫자 N에 대해 N단을 출력하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2739.txt");
let input = fs.readFileSync(filePath).toString().trim();

for (let i = 1; i <= 9; i++) {
  let result = input * i;
  console.log(`${input} * ${i} = ${result}`);
}
