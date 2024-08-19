const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10811.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

// console.log(input);

let [basket, count] = input[0]; // 5 4
let proto = Array.from({ length: basket }, (_, i) => i + 1); // [1,2,3,4,5]

// console.log(proto);

for (let i = 1; i <= count; i++) {
  let [start, end] = input[i];
  //   console.log(start, end);
  let subArray = proto.slice(start - 1, end).reverse();
  //   console.log(subArray);
  proto.splice(start - 1, end - start + 1, ...subArray);
}

console.log(...proto);
