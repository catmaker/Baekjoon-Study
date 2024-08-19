// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "5597.txt");
const file = process.platform === "linux" ? "dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);

let result = [];
for (let i = 1; i <= 30; i++) {
  result.push(i);
}
let sort = input.sort((a, b) => a - b);
// console.log(result);
// console.log(sort);

result.forEach((item) => {
  if (!sort.includes(item)) {
    console.log(item);
  }
});
