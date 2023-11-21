// 조건 3
// 함수에서 다른 함수 반환하기

let init = () => {
  return function(a,b) {
    return a - b > 0 ? a - b : b - a;
  }
}

// 함수 안에 다른 함수가 반환.
console.log(`init(30,20) : ${init(30, 20)}`);

//2개의 값을 처리한 결과.
console.log(`init(30,20) : ${init()(30, 20)}`);