const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);

// let [a,b,c] =
for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b, c] = input[i].split(" ");
  let floor = c % a === 0 ? a : c % a;
  let unit = Math.ceil(c / a);
  //   console.log(floor);
  //   console.log(unit);
  let result = floor.toString() + (unit < 10 ? "0" : "") + unit.toString();
  console.log(result);
}
