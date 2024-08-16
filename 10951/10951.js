// 두 정수 A와 B를 받아 더하는 문제
const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString();

let n = input
  .split(/\n/)
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

for (let i = 0; i < n.length; i++) {
  let split = n[i].split(" ");
  if (split.length === 2) {
    let num = split.map(Number);
    let result = num[0] + num[1];
    console.log(result);
  }
}
