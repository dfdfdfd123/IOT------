function sum(num1, num2)
{
  var result = a + b; // 지역변수(지역 스코프)
}

sum(10,20);
console.log(result); // 오류 발생, 선언된 변수가 없다.