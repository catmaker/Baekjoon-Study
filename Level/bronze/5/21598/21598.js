const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "21598.txt");
let input = fs.readFileSync(filePath).toString();

for (let i = 1; i <= Number(input); i++) {
  console.log("SciComLove");
}
