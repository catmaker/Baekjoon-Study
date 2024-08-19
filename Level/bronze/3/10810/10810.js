const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10810.txt");
const file = process.platform === "linux" ? "dev/stdin" : filePath;
const input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((line) => line.trim());

// console.log(input);
// N은 ~번 까지의 바구니의 개수
// M은 몇 회 바구니에 공을 넣는 행위를 할 것인지
let [N, M] = input[0].split(" ").map((num) => parseInt(num));
// console.log(N, M);

let basket = new Array(N).fill(0);
// console.log(basket);
// 1부터 돌리는 이유는 0번째 인덱스는 안씀
for (let i = 1; i <= M; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  //   console.log(a, b, c);
  for (let j = a; j <= b; j++) {
    // console.log(j);
    basket[j - 1] = c;
    // console.log(basket);
  }
}
console.log(basket.join(" "));
