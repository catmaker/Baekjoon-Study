const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "11654.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

const input = fs.readFileSync(file).toString();

// console.log(input);

let asciiCode = input.charCodeAt(0);

console.log(asciiCode);
