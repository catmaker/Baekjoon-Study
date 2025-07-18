const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "9012.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let problem = input.slice(1);

for (let testCase of problem) {
  let balance = 0;
  let isValid = true;
  for (let char of testCase) {
    if (char === "(") {
      balance++;
    } else {
      balance--;

      if (balance < 0) {
        isValid = false;
        break;
      }
    }
  }

  isValid && balance == 0 ? console.log("YES") : console.log("NO");
}
