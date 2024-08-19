// 주어진 n개의 수 중에서 m개를 뽑았을 때, k개 이상이 겹치는 경우의 확률을 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1359.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((el) => parseInt(el));

const n = input[0];
const m = input[1];
const k = input[2];

function combination(n, m) {
  if (m > n) return 0; // m이 n보다 클 경우 0을 반환
  let c = 1;
  for (let i = 0; i < m; i++) {
    // m개를 뽑는 경우의 수 계산
    c = (c * (n - i)) / (i + 1); // 조합 공식
  }
  return c;
}

// 전체 경우의 수
let totalCase = combination(n, m);

// k개 이상 겹치는 경우의 수 계산
let rapCase = 0;
for (let i = k; i <= m; i++) {
  rapCase += combination(m, i) * combination(n - m, m - i);
}

// 확률
let probability = rapCase / totalCase;
console.log(probability);

// // 주어진 n에 대해 1부터 n까지의 수를 배열에 넣어주기
// let countN = [];
// for (let i = 1; i < n + 1; i++) {
//   countN.push(i);
// }
// let firstCopyCountN = [...countN];
// let secondCopyCountN = [...countN];
// let firstResult = new Set();
// let secondResult = new Set();
// // countN 배열에서 서로 다른 M개의 갯수를 뽑아내기 (2회)
// while (firstResult.size < m) {
//   let randomIndex = Math.floor(Math.random() * countN.length);
//   let selectElement = firstCopyCountN[randomIndex];
//   firstResult.add(selectElement);
// }

// console.log(firstResult);

// while (secondResult.size < m) {
//   let randomIndex = Math.floor(Math.random() * secondCopyCountN.length);
//   let selectedElement = secondCopyCountN[randomIndex];
//   secondResult.add(selectedElement);
// }
// console.log(secondResult);
// // 1회차와 2회차의 배열을 비교해서 K의 갯수와 일치하는 경우를 찾아내기
// const intersection = [...firstResult].filter((item) => secondResult.has(item));
// // 일치하는 경우의 갯수를 출력하기
// console.log(intersection.length);
// // n개의 수 중에 m개를 뽑아서 k개가 겹치는 확률
