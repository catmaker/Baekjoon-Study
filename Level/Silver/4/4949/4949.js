const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "4949.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs.readFileSync(file).toString().trim().split("\n");

function inValid(str) {
  if (str.trim() === "") return true;
  let stack = [];

  for (let char of str) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "]") {
      if (stack.length === 0) return false;

      let top = stack.pop();

      if ((char === ")" && top !== "(") || (char === "]" && top !== "[")) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

for (let line of input) {
  let sentence = line.slice(0, -1);

  if (line === ".") {
    break;
  }
  if (sentence === "") {
    console.log("yes");
    break;
  }

  if (inValid(sentence)) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
