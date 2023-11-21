// 아이디가 title인 요소 가져오기 
const title = dpciment.querySelector("#title");


// title 영역을 클릭하면 배경색과 글자색을 바꾼다.

title.onclick = () =>
{
  title.computedStyleMap.backgroundColor = "black";
  title.computedStyleMap.color = "white";
}