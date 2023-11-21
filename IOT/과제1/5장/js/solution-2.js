
// 이벤트 핸들러 함수를 만듭니다.
function calculateGCD() {
  // 텍스트 필드에서 숫자를 가져옵니다.
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);

  // 유효한 숫자인지 확인합니다.
  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById("result").textContent = "올바른 숫자를 입력하세요.";
    return;
  }

  // 최대공약수를 계산합니다.
  const gcd = getGCD(number1, number2);

  // 결과를 표시합니다.
  document.getElementById("result").textContent = `${gcd}`;
}

// 최대공약수를 계산하는 함수를 만듭니다.
function getGCD(a, b) {
  while (b !== 0) {
    const temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

// 계산 버튼에 이벤트 핸들러를 등록합니다.
document.getElementById("calc").addEventListener("click", calculateGCD);
