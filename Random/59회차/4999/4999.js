const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "4999.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

var input = fs.readFileSync(file, "utf8");
const [a, b] = input.trim().split("\n");

console.log(a.length <= b.length ? "go" : "no");
