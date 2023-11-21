// 버튼, 제목, 저자, 정보 출력 영역 요소 가져오기

const save = document.querySelector("#save"); // 저장하기 버튼
const title = document.querySelector("#title"); // 제목 정보
 const author = document.querySelector("#author"); // 저자 정보
const bookList = document.querySelector("#bookList"); // 정보가 표시될 영역

// 저장하기 버튼 누르면
save.addEventListener("click", (e) => {

  e.preventDefault(); // 폼의 버튼을 클릭했을 때 서버로 보내지 않는다.

  // li 요소 만들기
  const item = document.createElement("li")

  // 내용을 가져온다. 리스트에 넣는다.
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>
  `;

  // 정보 영역에 추가
  bookList.appendChild(item);

  // input type="text" 내용을 지운다.
  title.value = "";
  author.value = "";

  // 목록에서 제거하기
   // 삭제 버튼(클래스) 요소 가져오기
  const delBtns = document.querySelectorAll(".delButton");

  // 삭제 버튼을 클릭할 때마다... 삭제를 포함하고 있는 요소들을 삭제(부모 노드 삭제)
  for(let delBtn of delBtns)
  {
    delBtn.addEventListener("click", function() {
      this.parentNode.remove();
    })
  }
});