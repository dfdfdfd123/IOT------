// 구조 분해 할당하기
// 주어진 자료 구조를 분해해서 변수에 할당하는 기능
// 배열의 일부분을 꺼내서 다른 변수로 할당 할 수 있다.

const fruits = ["사과", "복숭아"];
let apple = fruits[0];
let peach = fruits[1];

console.log(apple);
console.log(peach);

// 구조 분해 할당 => 왼쪽에는 변수, 오른쪽에는 분해 할 값 지정.

let [apple1, peach1] = ["사과", "복숭아"];

console.log(apple1);
console.log(peach1);

// 나머지 변수를 사용하여 구조 분해 할당.
// ...변수명
let [teacher, ...students] = ['이순신', '홍길동', '김길동', '박길동'];
console.log(teacher);
console.log(students);

// 두 수의 값 교환
let x = 10;
let y = 20;
console.log("x :", x, "y: ", y);

// let temp = x;
// x = y;
// y = temp;
console.log("x :", x, "y : ", y);

// 객체 구조 분해
// 객체를 이름이나 메서드 이름을 변수 이름으로 사용.
// 객체는 순서가 없기 때문에 키 이름과 변수 이름이 같아야
// 해당 키를 찾아서 값을 가져 올 수 있다.

const member = {
  name1 : '홍길동',
  age1 : 25
}

let {name1, age1} = member;
console.log(name1);
console.log(age1);

// 새로운 변수에 저장하기
// name 프로퍼티 값을 username 변수에 할당
const member2 = {
  name: "홍길동",
  age: 25
};

let { name: userName, age} = member2;
console.log(userName);

// 중첩된 객체 구조 분해
const student1 = {
  name : '김지연',
  score : {
    kor : 98,
    eng : 54,
    math : 65
  },
  friends : ["홍길동", "김길동", "박길동"],
};

// 구조 분해하여 변수에 할당.
let {
  name, 
  score: {kor, eng, math}, // student1.score.math
  friends:[f1,f2,f3]

} = student1;

console.log(math);
console.log(f1);