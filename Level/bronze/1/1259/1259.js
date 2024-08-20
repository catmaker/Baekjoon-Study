const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1259.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

function palindrome(number) {
  const ex = number.toString();
  let firstIndex = 0;
  let lastIndex = ex.length - 1;

  while (firstIndex < lastIndex) {
    if (ex[firstIndex] !== ex[lastIndex]) {
      return false;
    }
    firstIndex++;
    lastIndex--;
  }
  return true;
}

for (let i = 0; i < input.length; i++) {
  const number = input[i];
  if (number === "0") {
    continue;
  }
  if (palindrome(number)) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
