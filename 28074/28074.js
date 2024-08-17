const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "28074.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

// console.log(input);
const target = ["M", "O", "B", "I", "S"];

const splitChars = input[0].split("");
console.log(splitChars);

let allCharsPresent = true;

for (let i = 0; i < target.length; i++) {
  if (!splitChars.includes(target[i])) {
    allCharsPresent = false;
    break;
  }
}

if (allCharsPresent) {
  console.log("YES");
} else {
  console.log("NO");
}
