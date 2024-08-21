const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10845.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let commands = input.slice(1);

let queue = [];
let result = [];

commands.forEach((command) => {
  let [cmd, value] = command.split(" ");
  switch (cmd) {
    case "push":
      queue.push(parseInt(value));
      break;
    case "pop":
      result.push(queue.length ? queue.shift() : -1); // 가장 앞에 있는 값 꺼내기
      break;
    case "front":
      result.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      result.push(queue.length ? queue[queue.length - 1] : -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue.length ? 0 : 1);
      break;
  }
});

console.log(result.join("\n"));
