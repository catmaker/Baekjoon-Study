const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "10828.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let commands = input.slice(1);
let stack = [];
let result = [];

commands.forEach((command) => {
  let [cmd, value] = command.split(" ");
  switch (cmd) {
    case "push":
      stack.push(parseInt(value));
      break;
    case "pop":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length ? 0 : 1);
      break;
    case "top":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
