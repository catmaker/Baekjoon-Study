const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2920.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
const input = fs.readFileSync(file).toString().split(" ").map(Number);

let isAscending = true;
let isDescending = true;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] < input[i + 1]) {
    isDescending = false;
  } else if (input[i] > input[i + 1]) {
    isAscending = false;
  }
}

if (isAscending) {
  console.log("ascending");
} else if (isDescending) {
  console.log("descending");
} else {
  console.log("mixed");
}
