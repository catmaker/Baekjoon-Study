const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "1654.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 읽기
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

// 입력 처리
const [k, n] = input[0].split(" ").map(Number); // 첫 번째 줄에서 K와 N 추출
const cables = input.slice(1).map(Number); // 이후 줄에서 랜선 길이 추출
// 최대 길이 찾기 함수
function findMaxCableLength(cables, N) {
  let low = 1;
  let high = Math.max(...cables);
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let cableCount = cables.reduce(
      (acc, cable) => acc + Math.floor(cable / mid),
      0
    );

    if (cableCount >= N) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

let results = findMaxCableLength(cables, n);
console.log(results);
