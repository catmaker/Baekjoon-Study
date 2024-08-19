// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "3052.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0)
  .map(Number);

let result = [];
input.forEach((item) => result.push(item % 42));
// console.log(result);

let unique = new Set(result);
let uniqueCount = unique.size;

console.log(uniqueCount);
