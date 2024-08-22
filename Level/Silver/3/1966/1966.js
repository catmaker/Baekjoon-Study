const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1966.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let testCaseCount = Number(input[0]);
let inputSlice = input.slice(1);
let testCase = [];
for (let i = 0; i < inputSlice.length; i += 2) {
  let [n, m] = inputSlice[i].split(" ").map(Number);
  let priorities = inputSlice[i + 1].split(" ").map(Number);
  testCase.push({ n, m, priorities });
}

function solvedPrint(testCase) {
  let result = []; // 결과 저장

  testCase.forEach(({ n, m, priorities }) => {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let orderPrint = 0; // 출력 순서
    console.log(queue);

    while (queue.length > 0) {
      const current = queue.shift();
      if (queue.some((doc) => doc.priority > current.priority)) {
        queue.push(current);
      } else {
        orderPrint++;

        if (current.index === m) {
          result.push(orderPrint);
        }
      }
    }
  });
  return result;
}
const results = solvedPrint(testCase);
console.log(results);
