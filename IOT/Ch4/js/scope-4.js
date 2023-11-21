var hi = "hello"; // 전역 변수, 변수 선언

function greeting()
{
  var hi = "bye"; // var를 붙이면 지역 변수, 함수 안에서만 사용 가능.
}

console.log(hi); // hello
greeting();
console.log(hi); // hello
