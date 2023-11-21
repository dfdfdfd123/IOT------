// 버튼 요소 가져오기
document.querySelector("button")

// 버튼을 누르면..
addEventListener("click", () => {
  // p 요소 만들기
  let newP = document.createElement("p")
  // 내용 만들기
  let textNode = document.createTextNode("안녕하세요");

  // p에 내용 연결하기
  newP.appendChild(textNode)

  // 삽입할 위치의 기준 만들기
  let basisNode = document.querySelectorAll("p")[2];

  // 기준 앞에 삽입하기
  document.body.insertBefore(newP, basisNode)
}, { once : true }

);