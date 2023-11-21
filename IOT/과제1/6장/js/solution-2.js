
// 버튼과 메뉴 요소를 가져옵니다.
const button = document.getElementById("bttn");
const menu = document.getElementById("nav");

// 버튼 클릭 이벤트 핸들러를 등록합니다.
button.addEventListener("click", () => {
  // 메뉴의 상태에 따라 active 클래스를 토글합니다.
  menu.classList.toggle("active");
  button.classList.toggle("active");
});
