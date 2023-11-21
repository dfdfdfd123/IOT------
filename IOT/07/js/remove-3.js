// span 항목 모두 가져오기
const btns = document.querySelectorAll("p > span");

// span을 클릭하면
for(let btn of btns) {

  btn.addEventListener("click", function() {
  // span의 부모를 삭제한다.
  this.parentNode.remove(this);


  });

}


