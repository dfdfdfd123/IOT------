// 조건 1
// 변수에 할당할 수 있어야 한다.
let sum = (a, b) => a + b;
sum(10, 20);

//////////////////

function add(a, b) {
  return a + b;
}

// 변수의 할당
let sum2 = add; //add()를 붙이지 않는다. ()가 있으면 함수 실행의 의미이다.
sum2(1,2);