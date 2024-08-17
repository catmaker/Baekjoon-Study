// 팩토리얼
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "27433.txt");
let input = fs.readFileSync(filePath).toString();

let testCase = Number(input);

let result = 1;
for (let i = 1; i <= testCase; i++) {
  result *= i;
}
console.log(result);
