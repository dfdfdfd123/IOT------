// 제목 요소 가져오기
const title = document.querySelector("h1");

// 제목을 클릭하면
title.addEventListener("click", () => {
    // 제목을 삭제하면,
    title.remove();
})