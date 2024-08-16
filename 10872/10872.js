// 팩토리얼
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10872.txt");
let input = fs.readFileSync(filePath).toString();

let result = [];
for (let i = 1; i <= input; i++) {
  result.push(i);
}

let solution = 1;
for (let i = 0; i < result.length; i++) {
  solution *= result[i];
}
console.log(solution);
