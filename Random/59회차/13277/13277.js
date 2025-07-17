const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "13277.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

let input = fs.readFileSync(file, "utf8");

let [a, b] = input.split(" ");

console.log((BigInt(a) * BigInt(b)).toString());
