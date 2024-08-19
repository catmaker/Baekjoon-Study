// 디지털 시계에 하루동안(00:00~23:59) 표시되는 시각 중, N분이 후의 시각을 구하는 프로그램을 작성하시오.
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2525.txt");
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

const [hour, minute] = input[0].split(" ").map(Number);
const usageTime = Number(input[1]);

// 시간을 분으로 환산
let covertTimeToMin = hour * 60 + minute + usageTime;
// 60으로 나눈 몫을 시간으로, 나머지를 분으로
let resultTime = Math.floor(covertTimeToMin / 60);
let resultMin = covertTimeToMin % 60;
// 24시간 넘어가면 0시로 초기화
if (resultTime >= 24) {
  resultTime = resultTime % 24;
}
console.log(resultTime, resultMin);
