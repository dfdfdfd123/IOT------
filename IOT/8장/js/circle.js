// 반지름을 입력 받아 원의 넓이와 둘레를 계산하여 출력

// 원의 넓이를 계산하는 함수
function area(r) {

  return Math.PI * r * r;
}

// 원의 둘레를 계산하는 함수
function circum(r) {
  return 2 * Math.PI * r;
}

// 반지름 입력 받기 - prompt()
const radius = prompt("반지름을 입력하시오.");

// 결과 출력 영역 가지고 오기.
const result = document.querySelector("#result");

// 소수 2자리까지 넓이와 둘레 출력하기
result.innerText = `반지름 : ${radius}
                    원의 넓이 : ${area(radius).toFixed(2)}
                    원의 둘레 : ${circum(radius).toFixed(2)}`;




