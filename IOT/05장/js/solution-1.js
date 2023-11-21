// 상세 설명을 토글하는 함수
function toggleDetail() {
  const detailElement = document.getElementById('detail');

  // 상세 설명의 현재 표시 상태를 확인
  const isHidden = detailElement.classList.contains('hidden');

  // 표시 상태를 변경
  if (isHidden) {
    // 상세 설명을 표시
    detailElement.classList.remove('hidden');
  } else {
    // 상세 설명을 숨김
    detailElement.classList.add('hidden');
  }
}

// 버튼 클릭 시 이벤트 핸들러 등록
const viewButton = document.getElementById('view');
viewButton.addEventListener('click', toggleDetail);


