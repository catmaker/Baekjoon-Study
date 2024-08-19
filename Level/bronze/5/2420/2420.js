// 절댓값 구하기
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2420.txt");
let input = fs.readFileSync(filePath).toString();

let n = input.split(" ");

let a = parseInt(n[0]);
let b = parseInt(n[1]);
console.log(Math.abs(a - b));
