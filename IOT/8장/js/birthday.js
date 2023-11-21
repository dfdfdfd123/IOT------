// 결과 영역 가져오기
const result = document.querySelector("#result");

// 기준 날짜 정하기 - 내 생일
const firstDay = new Date("1999-12-02");

// 오늘 날짜 가져오기
const today = new Date();

// 시간 계산하기
let passedTime = today.getTime() - firstDay.getTime();

// 일로 계산하기
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// result에 출력하기 
result.innerText = passedDay;