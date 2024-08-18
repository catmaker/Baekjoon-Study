// 코딩은 체육과목 입니다
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "25314.txt");

let input = fs.readFileSync(filePath).toString();

let num = Number(input);
let long = "long ";
let result = "";
// num을 4로 나눈 몫만큼 long을 출력한다.
for (let i = 0; i < num / 4; i++) {
  result += long;
}

console.log(result + "int");
