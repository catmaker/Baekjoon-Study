// 테스트 케이스의 개수를 입력받고, 그만큼 두 정수를 입력받아 더한 값을 출력하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10950.txt");
let input = fs.readFileSync(filePath).toString();

let n = input.split(/\n/).map((line) => line.trim());

let testCast = n[0];

for (let i = 1; i <= testCast; i++) {
  let split = n[i].split(" ");
  let num = split.map(Number);
  let result = num[0] + num[1];
  console.log(result);
}
