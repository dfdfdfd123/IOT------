// 캐러셀 영역 가져오기
const container = document.querySelector("#container");

// 이미지 배열로 만들기
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"]

// 첫 번째 이미지 기본으로 표시
container.style.backgroundImage = `url(images/${pics[0]})`;

// 화살표 요소 가져오기
const arrows = document.querySelectorAll(".arrow");

// 배열 인덱스 변수
let i = 0;

//  화살표 버튼을 누르면..
arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) =>
  {
    if(e.target.id === "left") { // 왼쪽 화살표를 누르면
      i--; // 이전 이미지로 이동
      if (i < 0) // 처음 이미지에서 왼쪽 버튼이 눌러지면
      {
        
        i = pics.length - 1; // 이미지 마지막으로 이동.
      }
    }
    else if (e.target.id == "right")
    {
      i++; // 다음 이미지로 이동
      if (i >= pics.length) // 마지막 이미지 다음은..
      {
        i = 0; // 이미지의 처음으로 이동.
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`; // 현재 이미지 표시

  })
})