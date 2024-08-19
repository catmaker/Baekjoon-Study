const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2675.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);

for (let i = 1; i <= Number(input[0]); i++) {
  const [repeatCount, str] = input[i].split(" ");
  let result = "";

  for (let char of str) {
    result += char.repeat(Number(repeatCount));
  }

  console.log(result);
}
