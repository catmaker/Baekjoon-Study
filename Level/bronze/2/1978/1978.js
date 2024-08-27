const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1978.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs.readFileSync(file).toString().split("\n");

const N = input[0];
const numbers = input[1].split(" ").map(Number);

let result = 0;
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let num of numbers) {
  if (isPrime(num)) {
    result++;
  }
}

console.log(result);
