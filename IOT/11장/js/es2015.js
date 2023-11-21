// 매개변수 기본 값

// 매개 변수에 기본 값을 지정하지 않았을 때
function hello1(name, message) {
  console.log(`${name}님 ${message}`);

}
  
  hello1("홍길동", "반갑습니다.");
  hello1("김길동");

  // 매개변수에 기본 값을 지정
  function hello2(name, message="안녕하세요.")
  {
    console.log(`${name}님 ${message}`);
  }
  hello2("박길동", "반갑습니다.")
  hello2("최길동")

  // 전개 구문
  // 나머지 매개변수로 사용할 때
  // 매개변수의 개수를 고정하기 힘들 때 사용.
  function addNum(...numbers) {
    let sum = 0;

    for(let number of numbers) {
      sum += number;

    }
    
    return sum;
  }

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));


// 전개 구문을 사용하여 배열과 배열을 연결
let animals = ['bird', 'dog', 'cat'];
let fruits = ['apple','banana', 'tomato'];
console.log(animals.concat(fruits));
console.log([...animals, ...fruits]);

// 배열 복사 
let fruits2 = ['apple','banana', 'tomato'];
console.log(fruits2);
let fav = fruits2; // 복사
console.log(fav);
fav[0] = 'mango';

console.log(fruits2);
console.log(fav);

// 전개 구문으로 배열의 값만 복사
let fav2 = [...fruits]
fav2[1] = 'orange';
console.log(fruits2);
console.log(fav2);

// 객체 프로퍼티
// 일반적으로 객체의 프로퍼티에 접근 할 때 .(점) 표기법 사용.
// []대괄호를 사용할 수 있다.
// []안에 입력하는 프로퍼티는 문자열로 작성.

const book = {
      title : "javascript",
      pages : 650,
}

// 프로퍼티 추가 => published date
// book.published date = "2023-11"; // 공백으로 인해 오류

book["published date"] = "2023-11";
console.log(book);

// 함수나 계산식을 프로퍼티 이름으로 사용 할 수 있다.
function fn() {
  return "result";
}

const obj1 = {
  [fn()] : "함수 키"
}
console.log(obj1)

function add(a, b) {
  return a + b;
}

const obj2 = {
  [fn()] : "함수 키",
  [`${add(10,20)}`] :  "계산식 키"
}

console.log(obj2)

// 객체를 정의 할 때 객체 밖에서 점 표기법으로 
// 프로퍼티 이름과 값을 지정할 수 있다.

let student = {
  name : '홍길동'
}

student.age = 20;
console.log(student)

// 변수에 저장된 값을 가져와 프로퍼티로 사용해야 할 경우
// 생성자 함수로 객체를 정의해서 사용할 수 있다.

function makeUser(name, age)
{
  return {
    name : name, // 매개변수와 프로퍼티 이름이 같다.
    age : age
  }
}

let user1 = makeUser("홍길동", 20);
console.log(user1);

function makeUser(name, age)
{
  return {
    name, // 줄여서 사용 가능 =? 프로퍼티 단축이라고 한다.
    age 
  }
}

let user2 = makeUser("홍길동", 20);
console.log(user2);

/* 

    프로퍼티 단축 표기법 
    
    name : name 
    => 직접 할당 
    => 주로 간단한 객체 초기화에 사용.

    this.name = name
    => 생성자 함수 내부에서 사용.
    => 객체의 메서드나 속성을 초기화 하는데 사용.

*/

// 심벌
// 추가된 새로운 원시 자료형
// 한번 정의하면 값을 변경 할 수 없고, 유일한 값을 가진다.

let user_id1 = Symbol();
let user_id2 = Symbol();
console.log(user_id1 === user_id2);

// 심벌을 사용해 프로퍼티 정의하기
// 심벌키는 접근이 불가능. 중요한 프로퍼티를 감출 때 사용.
const id = Symbol("id");
const tel = Symbol("tel_num");

const member = {
  name : '홍길동',
  age : 25,
  [id] : 202095000,
  [tel] : function () {
    alert(prompt("전화번호 입력"));
  },
};

for (item in member) {
  console.log(`${item} : ${member[item]}`);
}

// 심벌키에 접근하기
// 심벌키로 사용함 메서드나 프로퍼티에 접근을 하려면 [] 사용.
  console.log(member[id]);
 // member[tel]() // 메서드가 실행된다.

 // 전역 심벌
 // Symbol.for() => 키에 해당하느 심벌을 찾는다.
 let tel_num = Symbol.for("tel_num");

 // tel_num 키에 대한 심벌이 이미 있기 때문에 가져와서 사용
 let phone = Symbol.for("tel_num");

 console.log(tel_num === phone);
 
 // Symbol.keyFor()
 // 심벌값을 인수로 받아서 전역 심벌 레지스트리를 뒤져 심벌값의 키를 찾는다.
 console.log(Symbol.keyFor(phone));
 