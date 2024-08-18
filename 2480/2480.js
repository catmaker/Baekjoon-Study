// 주사위의 세 눈이 같은 경우와 두 눈이 같은 경우 또는 모두 다를 경우에 따라 상금을 결정하는 문제
const path = require("path");
const filePath = path.join(__dirname, "2480.txt");
let [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((x, y) => x - y);

console.log(a, b, c);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b || b == c) {
  console.log(1000 + b * 100);
} else {
  console.log(c * 100);
}

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
