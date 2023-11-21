// 버튼과 메뉴 요소를 가져옵니다.
const button = document.getElementById("bttn");
const menu = document.getElementById("nav");
const menu2 = document.getElementById("request");
const menu3 = document.getElementById("container");

// HTML 요소 가져오기
const usernameInput = document.getElementById('username');
const useridInput = document.getElementById('userid');
const subjectInput = document.getElementById('subject');
const tableBody = document.querySelector('#attendant tbody');




// 버튼 클릭 이벤트 핸들러를 등록합니다.
button.addEventListener("click", () => {
  // 메뉴의 상태에 따라 active 클래스를 토글합니다.
  menu.classList.toggle("active");
  button.classList.toggle("active");
});

menu2.addEventListener("click", () => {

  // 메뉴의 상태에 따라 active 클래스를 토글합니다.
  menu3.classList.toggle("active");
  menu.classList.toggle("active");
  button.classList.toggle("active");
});


// subjectInput.addEventListener("click", () => {

document.querySelector('subject').addEventListener('click', function(event) {
  event.preventDefault();
  
   // 입력된 이름과 학번 신청과목 가져오기
   const username = usernameInput.value;
   const userid = useridInput.value;
   const subject = subjectInput.value;
 
   // 새로운 행 (tr) 생성
   const newRow = document.createElement('tr');
 
   // 이름 (td) 셀 생성 및 값 설정
   const nameCell = document.createElement('td');
   nameCell.textContent = username;
 
   // 학번 (td) 셀 생성 및 값 설정
   const useridCell = document.createElement('td');
   useridCell.textContent = userid;

   // 신청과목 (td) 셀 생성 및 값 설정
   const subjectCell = document.createElement('td');
   subject.textContent = subject;
 
   // 이름과 학번 신청과목 셀을 행에 추가
   newRow.appendChild(nameCell);
   newRow.appendChild(useridCell);
   newRow.appendChild(subjectCell);
 
   // 행을 표 (table)에 추가
   tableBody.appendChild(newRow);
 
   // 입력 필드 초기화
   usernameInput.value = '';
   majorInput.value = '';

});
