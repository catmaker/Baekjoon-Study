const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10813.txt");
const file = process.platform === "linux" ? "dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());
console.log(input);

const [N, M] = input[0].split(" ").map((n) => parseInt(n));
console.log(N, M);
// N은 1부터 N까지의 수
// M은 스왑 횟수

// 1부터 N까지의 수를 담은 배열
let basket = Array.from({ length: N }, (_, i) => i + 1);
console.log(basket);
for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let temp = basket[a - 1];
  basket[a - 1] = basket[b - 1];
  basket[b - 1] = temp;
}

console.log(basket.join(" "));
