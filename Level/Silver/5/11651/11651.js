const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "11651.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

let input = fs.readFileSync(file).toString().trim().split("\n");

let A = input.slice(1);

let cord = A.sort((a, b) => {
  const [aX, aY] = a.split(" ").map(Number);
  const [bX, bY] = b.split(" ").map(Number);

  if (aY === bY) {
    return aX - bX;
  }

  return aY - bY;
});

console.log(cord.join("\n"));
