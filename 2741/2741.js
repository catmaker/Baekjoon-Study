// n까지 출력하기
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2741.txt");
const input = fs.readFileSync(filePath).toString();

console.log(input);
//55

for (let i = 1; i <= input; i++) {
  console.log(i);
}
