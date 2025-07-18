const fs = require("fs");
const path = require("path");

// 파일 경로 설정
const filePath = path.join(__dirname, "30087.txt");
const file = process.platform === "linux" ? "/dev/stdin" : filePath;

let input = fs.readFileSync(file, "utf8").trim().split("\n");
let n = input[0];
let seminars = input.slice(1);

for (let seminar of seminars) {
  switch (seminar) {
    case "Algorithm":
      console.log(204);
      break;
    case "DataAnalysis":
      console.log(207);
      break;
    case "ArtificialIntelligence":
      console.log(302);
      break;
    case "CyberSecurity":
      console.log("B101");
      break;
    case "Network":
      console.log(303);
      break;
    case "Startup":
      console.log(501);
      break;
    case "TestStrategy":
      console.log(105);
      break;

    default:
      break;
  }
}
