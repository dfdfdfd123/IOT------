// 매개 변수가 없을 때

let hi = function()
{
  return '안녕하세요';
}

// 함수 호출
hi();

let hi2 = () => '안녕하세요.';
hi2();


// 매개 변수가 1개 일 때

let hi3 = function(user) {
  console.log(`${user}님 환영합니다.`)
}
hi3(`임정민`);

// 매개 변수가 2개 일 때
let sum = function(a, b)
{
  return a + b;
}
sum(10, 20);

let sum2 = (a, b) => a + b;

//콘솔창에 100, 200의 합계를 출력하시오.
console.log(`100 + 200 = ${sum(100 + 200)}`);
