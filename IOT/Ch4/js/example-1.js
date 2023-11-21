// 두 수를 곱한 결과를 반환하는 함수 정의
function multiplyNumbers(a, b) {

  // let result = num1 * num2;
  // result; //곱한 결과 돌려준다.

  return a * b;
}

// 2개의 정수 입력 받기
let number1 = parseInt(prompt("첫 번째 정수 입력"))
let number2 = parseInt(prompt("두 번째 정수 입력"))

document.write(`<h1>${number1} * ${number2} = ${multiple(number1, number2)}</h1>`);

let result = multiple(number1, number2);
document.write(`<h1>${number1} * {number2} = ${result}</h1>`)

// 함수를 사용하여 10과 20을 곱한 결과를 콘솔에 표시
//var result = multiplyNumbers(10, 20);
// console.log(result); // 결과값인 200이 콘솔에 출력됨
