// 버튼 요소를 가져옵니다.
const button = document.getElementById("bttn");

// 알림 메시지를 표시할 박스 요소를 가져옵니다.
const notiBox = document.getElementById("noti-box");

// [클릭] 버튼 클릭 이벤트 핸들러를 등록합니다.
button.addEventListener("click", () => {
  // 알림 메시지 요소를 생성합니다.
  const noti = document.createElement("div");
  noti.className = "noti";
  noti.innerText = "알림 내용이 표시됩니다.";
  
  // 알림 메시지를 notiBox에 추가합니다.
  notiBox.appendChild(noti);
  
  // 3초 후에 알림 메시지를 삭제합니다.
  setTimeout(() => {
    notiBox.removeChild(noti);
  }, 3000);
});

