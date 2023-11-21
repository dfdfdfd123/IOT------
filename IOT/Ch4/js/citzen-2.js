// 조건 2
// 함수를 다른 함수로 전달하기
function hello() {
  return "안녕하세요.";
}

function bye()
{
  return "안녕히 가세요.";
}

function userCheck(name, fn)
{
  console.log(`${name}님`, fn());
}

userCheck("임정민", hello);
userCheck("홍길동", bye);