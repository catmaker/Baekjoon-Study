const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10814.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs.readFileSync(file).toString().trim().split("\n");

let memberCount = Number(input[0]); // 첫 번째 줄에서 회원 수를 읽음
let member = input
  .slice(1, memberCount + 1) // 첫 번째 줄을 제외한 나머지 줄을 처리
  .map((line) => line.trim().split(" "));

member.sort((a, b) => Number(a[0]) - Number(b[0]));

for (let i = 0; i < member.length; i++) {
  console.log(member[i][0] + " " + member[i][1]);
}
