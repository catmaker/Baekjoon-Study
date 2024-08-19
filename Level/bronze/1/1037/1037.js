// 약수의 갯수와 약수를 받아서 원래 수를 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1037.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input[0].split(" ").map((el) => parseInt(el));
let divisor = input[1].split(" ").map((el) => parseInt(el));
console.log(input);
console.log(testCase);
console.log(divisor);

if (testCase[0] > 1) {
  console.log(Math.max(...divisor) * Math.min(...divisor));
} else {
  console.log(divisor[0] ** 2);
}
