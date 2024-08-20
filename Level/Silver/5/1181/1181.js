const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "1181.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 데이터를 불러와서 처리
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

// 첫 번째 줄은 단어의 개수(N)이므로 생략하고, 나머지를 배열로 저장
let example = input.slice(1);

// 중복된 단어 제거
let set = [...new Set(example)];

// 정렬 수행: 길이 우선 정렬, 길이가 같으면 사전순 정렬
set.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

// 정렬된 결과를 출력
console.log(set.join("\n"));
