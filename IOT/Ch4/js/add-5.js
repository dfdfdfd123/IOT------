// 즉시 실행 함수는 선언과 동시에 사용.
(function(a,b)
{
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(100, 200);
