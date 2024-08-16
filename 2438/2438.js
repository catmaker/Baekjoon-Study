// 별 찍기
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2438.txt");

const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

console.log(input);

for (let i = 1; i <= input[0]; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}
