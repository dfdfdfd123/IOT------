
  // 이미지 요소를 가져옵니다.
  const image = document.querySelector("#container > img");

  // 마우스 오버 이벤트 핸들러를 등록합니다.
  image.addEventListener("mouseover", function()  {
    // 이미지의 src 속성을 변경하여 다른 이미지로 바꿉니다.
    image.src = "images/pic-6.jpg";
  });

  // 마우스 아웃 이벤트 핸들러를 등록합니다.
  image.addEventListener("mouseout", function() {
    // 이미지의 src 속성을 원래 이미지로 다시 변경합니다.
    image.src = "images/pic-1.jpg";
  });
