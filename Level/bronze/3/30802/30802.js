const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "30802.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

// 입력 읽기
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let participants = Number(input[0]);

function pack(order, bundle) {
  // 티셔츠 묶음 계산
  let totalBundles = 0;
  order.forEach((num) => {
    totalBundles += Math.ceil(num / bundle[0]);
  });

  // 펜 묶음 계산
  const penBundles = Math.floor(participants / bundle[1]);
  const remainingPens = participants % bundle[1];

  // 결과 출력
  console.log(totalBundles);
  console.log(`${penBundles} ${remainingPens}`);
}

let order = input[1].split(" ").map(Number);
let bundle = input[2].split(" ").map(Number);
pack(order, bundle);
