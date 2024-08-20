const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "2751.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 데이터를 불러와서 처리
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);

let set = [...new Set(input.slice(1, input.length))];
let sort = set.sort((a, b) => a - b);
console.log(...sort);
