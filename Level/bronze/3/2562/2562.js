// max를 구하고 max의 인덱스를 구하는 문제
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2562.txt");
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((num) => num.length > 0)
  .map((num) => parseInt(num));
let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);

// parseInt를 사용 할 경우 조건이 자연수임에도 백준에서 불통과가 뜬다.
// 몇번 테스트 해보니까 Number로 바꾸면 통과가 됨
// 이유는 입력 값에서 빈 줄이 있어서 그런 것 같다.
// filter((num) => num.length > 0) 를 주면 통과가 된다.
