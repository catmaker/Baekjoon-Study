const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "2439.txt");
let input = fs.readFileSync(filePath).toString();

let testCase = parseInt(input);
let star = "";

for (let i = 1; i <= testCase; i++) {
  star += "*";
  console.log(star.padStart(testCase, " "));
}
