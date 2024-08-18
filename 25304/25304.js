// 영수증에 적힌 가격과 수량, 총 금액을 보고 영수증에 적힌 총 금액과 일치하는지 검사하는 프로그램을 작성하시오.
const path = require("path");
const filePath = path.join(__dirname, "25304.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const resultSum = Number(input[0]);
const bought = Number(input[1]);
let sum = 0;

for (let i = 0; i < bought; i++) {
  let startIndex = input[i + 2];
  let indexSplit = startIndex.split(" ");
  let result = indexSplit[0] * indexSplit[1];
  sum += result;
}

resultSum === sum ? console.log("Yes") : console.log("No");
