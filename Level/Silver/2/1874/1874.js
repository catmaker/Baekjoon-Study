const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1874.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

function validateStackSequence(popped) {
  const n = popped.length;
  let pushed = Array.from({ length: n }, (_, i) => i + 1);
  let stack = [];
  let result = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    stack.push(pushed[i]);
    result.push("+");

    // 스택의 top이 popped의 현재 요소와 같다면 pop 연산 수행
    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      result.push("-");
      j++;
    }
  }

  if (j === popped.length) {
    console.log(result.join("\n"));
  } else {
    console.log("NO");
  }
}

let popped = input.slice(1).map((num) => Number(num));

validateStackSequence(popped);
