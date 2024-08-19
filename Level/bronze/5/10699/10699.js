// 년월일 출력하기
let seoul = new Date();
let seoulYear = seoul.getFullYear();
let seoulMonth = (seoul.getMonth() + 1).toString().padStart(2, "0");
let seoulDate = seoul.getDate().toString().padStart(2, "0");

let seoulYearMonthDate = `${seoulYear}-${seoulMonth}-${seoulDate}`;
console.log(seoulYearMonthDate);
