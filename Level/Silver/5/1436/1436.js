const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "1436.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 데이터를 불러와서 처리
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);

const N = input[0];
let count = 0;
let number = 666;

while (true) {
  if (number.toString().includes("666")) {
    count++;
  }
  if (count === N) {
    console.log(number);
    break;
  }
  number++;
}
