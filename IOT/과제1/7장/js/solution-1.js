// HTML 요소 가져오기
const usernameInput = document.getElementById('username');
const majorInput = document.getElementById('major');
const tableBody = document.querySelector('#attendant tbody');

// 버튼 클릭 이벤트 핸들러
document.querySelector('button').addEventListener('click', function(event) {
  event.preventDefault();

  // 입력된 이름과 전공 가져오기
  const username = usernameInput.value;
  const major = majorInput.value;

  // 새로운 행 (tr) 생성
  const newRow = document.createElement('tr');

  // 이름 (td) 셀 생성 및 값 설정
  const nameCell = document.createElement('td');
  nameCell.textContent = username;

  // 전공 (td) 셀 생성 및 값 설정
  const majorCell = document.createElement('td');
  majorCell.textContent = major;

  // 이름과 전공 셀을 행에 추가
  newRow.appendChild(nameCell);
  newRow.appendChild(majorCell);

  // 행을 표 (table)에 추가
  tableBody.appendChild(newRow);

  // 입력 필드 초기화
  usernameInput.value = '';
  majorInput.value = '';
});
