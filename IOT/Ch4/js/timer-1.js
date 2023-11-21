// 2초에 하나씩 자기 이름 출력
// 함수 선언
function greeting()
{
  console.log("안녕하세요?");
}

setInterval(greeting, 2000);

// 직접 함수를 입력하여 실행
setInterval(() => {
  console.log("집가고 싶다...");
}, 3000);