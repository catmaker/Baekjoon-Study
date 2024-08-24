const fs = require("fs");
const { default: test } = require("node:test");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "2108.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 읽기
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);
let n = input[0];
let testCase = input.slice(1);

function solved(testCase) {
  let result = [];
  let average = Math.round(
    testCase.reduce((acc, num) => acc + num / testCase.length, 0)
  );
  result.push(average === -0 ? 0 : average);
  //   console.log(result);

  let middleArr = testCase.sort((a, b) => a - b);
  let middleIndex = Math.floor(middleArr.length / 2);
  result.push(middleArr[middleIndex]);
  //   console.log(result);

  let freq = {};
  let mode = [];
  let maxFreq = testCase.forEach((num) => {
    if (freq[num]) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  });
  //   console.log(freq);
  let max = Math.max(...Object.values(freq));
  //   console.log(max);
  for (let key in freq) {
    if (freq[key] === max) {
      mode.push(Number(key));
    }
  }
  //   console.log(mode);
  mode.sort((a, b) => a - b);
  result.push(mode.length > 1 ? mode[1] : mode[0]);
  //   console.log(result);

  let range = Math.max(...testCase) - Math.min(...testCase);
  //   console.log(range);
  result.push(range);
  //   console.log(result);

  return result;
}

let results = solved(testCase);
console.log(results.join("\n"));
