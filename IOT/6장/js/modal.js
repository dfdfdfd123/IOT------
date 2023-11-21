

const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

// 프로필 보기 버튼 누르면 프로필 박스 오픈
open.addEventListener("click", () => {
  modalBox.classList.toggle("active"); // 클릭하면 .active 스타일을 추가.
});

// x 버튼 누르면 프로필 박스 삭제
close.addEventListener("click", () => {
  modalBox.classList.toggle("active"); // 클릭하면 .active 스타일을
});
