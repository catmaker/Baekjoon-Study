const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "27389.txt");
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((el) => parseInt(el));

let result = (input / 4).toFixed(2);
console.log(result);
