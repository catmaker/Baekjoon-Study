const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs.readFileSync(file).toString().split(" ").map(Number);

// console.log(input);
let sum = 0;
input.forEach((item) => (sum += item * item));
console.log(sum % 10);
