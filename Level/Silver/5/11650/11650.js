const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "11650.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let count = Number(input[0]);
let coordinates = input.slice(1).map((sp) => sp.split(" ").map(Number));

function solve(count, coordinates) {
  coordinates.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  coordinates.forEach((coord) => {
    console.log(coord.join(" "));
  });
}
solve(count, coordinates);
