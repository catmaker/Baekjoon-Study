const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "11866.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((tr) => tr.trim());
let [n, k] = input[0].split(" ").map(Number);
let arr = Array.from({ length: n }, (_, i) => i + 1);
let result = [];
let index = 0;
while (arr.length > 0) {
  // 배열이 비어있을 때까지 반복
  index = (index + k - 1) % arr.length; // k번째 사람을 찾기 위해 index를 k-1만큼 이동
  result.push(arr.splice(index, 1)[0]); // 해당 index를 배열에서 제거하고 result에 추가
}
// 예시
// n = 7, k = 3
// 1 2 3 4 5 6 7
// 1 2 4 5 6 7
// 1 2 4 5 7
// 1 4 5 7
// 1 4 5
// 4 5
// 4
console.log(`<${result.join(", ")}>`);
