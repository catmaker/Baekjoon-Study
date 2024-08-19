const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs.readFileSync(file).toString().split(" ").map(Number);
const [X, Y] = input;
console.log(X, Y);
const main = () => {
  const d = Y - X;
  if (d === 1) {
    return 1;
  } else if (d === 2) {
    return 2;
  } else if (d === 3) {
    return 3;
  } else {
    const x = Math.sqrt(d); // 제곱근 구해서
    if (x % Math.floor(x) === 0) {
      // 제곱근이면
      return 2 * (x - 1) + 1; // 2(K-1)+1 공식 사용
    } else {
      return Math.floor(x * 2); // 아니면 *2해서 근사치 사용
    }
  }
};

console.log(main());
