const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "8958.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

// console.log(input);
for (let i = 1; i < input.length; i++) {
  let sum = 0;
  let increase = 1;
  let OX = input[i].split("");

  for (let j = 0; j < OX.length; j++) {
    if (OX[j] === "O") {
      sum += increase;
      increase++;
    } else {
      increase = 1;
    }
  }

  console.log(sum);
}
