// 테스트 케이스 입력받아서 출력하고 0 0이면 종료하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10952.txt");
let input = fs.readFileSync(filePath).toString();

let n = input.split(/\n/).map((line) => line.trim());

for (let i = 0; i < n.length; i++) {
  let num = n[i].split(" ").map(Number);
  if (num[0] === 0 && num[1] === 0) {
    break;
  }
  let result = num[0] + num[1];
  console.log(result);
}
