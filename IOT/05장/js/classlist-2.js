// 아이디가 title인 요소 가져오기 
const title = document.querySelector("#title");


// title 영역을 클릭하면 배경색과 글자색을 바꾼다.
title.onclick = () => {
  // clicked 스타일이 없으면, 클래스 이름이 clicked 인 것으로 추가하시오.
 if(!title.classList.contains("clicked"))
 {
  title.classList.add("clicked");
 }
 else // clicked 스타일이 있으면
 {
    title.classList.remove("clicked");
 }
}
