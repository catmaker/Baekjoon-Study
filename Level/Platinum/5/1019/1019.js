const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1019.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs.readFileSync(file).toString().trim();

let counts = Array(10).fill(0); // 초기화

function countDigits(start, end) {
  let factor = 1;
  while (start <= end) {
    // 1 <= 100 start가 end를 넘을때까지
    while (start % 10 !== 0 && start <= end) {
      // 나머지가 떨어질때까지 && end를 넘지 않을때 반복
      countEachDigit(start, factor);
      start++;
    }
    if (start > end) break;
    while (end % 10 !== 9 && start <= end) {
      countEachDigit(end, factor);
      end--;
    }
    let range = Math.floor(end / 10) - Math.floor(start / 10) + 1;
    for (let i = 0; i < 10; i++) {
      counts[i] += range * factor;
    }
    start = Math.floor(start / 10);
    end = Math.floor(end / 10);
    factor *= 10; // 10을 곱함
  }
}

function countEachDigit(num, factor) {
  while (num > 0) {
    counts[num % 10] += factor;
    num = Math.floor(num / 10);
  }
}

countDigits(1, Number(input));
console.log(...counts);
