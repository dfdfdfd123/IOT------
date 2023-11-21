// 버튼 클릭하면 배경 색 바꾸기
// 버튼 요소 가져오기 - 아이디가 btn1
const button1 = document.querySelector("#btn1")

button1.onclick = function() {
  document.body.style.backgroundColor = "green";
}


// 배경 바꾸는 함수 따로 정의하기
function changeBackground()
{
  document.body.style.backgroundColor = "pink";
  document.body.stylecolor = "white";
}

const button2 = document.querySelector("#btn2");
button2.onclick = changeBackground; // 함수 호출;

// 두 가지 이벤트 처리하기
/*
  onclick="alert('두 가지 이벤트 처리')"은 실행되지 않는다.
  on이벤트 프로퍼티는 하나만 사용 가능하기 때문이다.
  마지막 사용한 onclick 프로퍼티만 적용되어 배경색만 바뀐다.
  하나의 이벤트에 여러 함수를 연결하려면 addEventListener() 사용해야 한다.
  */

const button3 = document.querySelector("#btn3");
button3.onclick = function() {
  document.body.style.backgroundColor = "orange";
}

const button4 = document.querySelector("#btn4");
button4.addEventListener("click", () => {
  document.body.style.backgroundColor = "tomato";
});

// 버튼을 누르면 배경색과 글자색 토글하기
const button5 = document.querySelector("#btn5");
button5.addEventListener("click", () => {
  document.body.style = "";
  document.body.classList.toggle("convert");
});

// 텍스트 필드에 입력한 글자 수 알아내기
const button6 = document.querySelector("#btn6");
button6.addEventListener("click", () => {
   const word = document.querySelector("#word").value; // 텍스트 상자의 내용을 가지고 옴
   let count = word.length; // 문자열의 길이

   const result = document.querySelector("#result"); // 결과
   result.innerText = `${count}`; // 결과 표시
});
