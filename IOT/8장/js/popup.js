// 브라우저를 열면 팝업창 열기
window.open("notice.html", "이벤트 팝업", "width=400 height=400");

// 버튼을 누르면 팝업 창 열기
// 버튼 요소 가져오기
const btn = document.querySelector("button");

// 이벤트 
btn.addEventListener("click", () => {

  window.open("notice.html", "이벤트 팝업", "width=400 height=300 left=300 top=200");
});