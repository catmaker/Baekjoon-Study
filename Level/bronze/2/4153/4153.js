const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "4153.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

let input = fs.readFileSync(file).toString().trim().split("\n");

input.map((a) => {
  const nums = a
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);
  const [x, y, z] = nums;
  if (z !== 0) {
    console.log(x ** 2 + y ** 2 === z ** 2 ? "right" : "wrong");
  }
});
