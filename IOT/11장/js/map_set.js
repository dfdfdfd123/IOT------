// 배열을 변경하는 메서드
// map(), filter(), reduce()

// map() => 각 배열 요소에 똑같은 함수를 실행 한 후
// 그 결과를 새로운 배열로 반환하는 메서드

let numbers = [1,2,3,4,5]
let newNumbers = numbers.map((number) => number * 2);
console.log(numbers);
console.log(newNumbers);

let newNumbers2 = numbers.map((number, index) => (number * 3) + index);
console.log(newNumbers2);

// filter() => 특정 조건을 골라내기()
// 배열 요소의 값이나 인덱스, 배열을 받아서 함수를 실행하고,
// return 문으로 반환된 값을 새로운 배열에 추가
// 85점 이상만 골라내기 => 새 변수에 저장.
let scores = [95,45,77,88,93,65]
let highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// 85점 이상인 값과 인덱스 함께 출력
let highScores2 = scores.filter((score, index) => {
  if (score >= 85) {
    console.log(`index : ${index}, score : ${score}`);
    return score;
  }
});

// reduce() => 값 누적하기.
// 배열 요소에서 차례대로 함수를 실행하면서 결과 값을 누적하는 메소드.
let numbers2 = [1,2,3,4,5]
let result = numbers2.reduce((total, current) => total + current, 0);
console.log(result);

// Map()
// 키와 값을 가지고 있다.
// 프로퍼티키는 문자열 뿐만 아니라 모든 자료형을 사용할 수 있다.
// 순서가 있다.
let bag = new Map();
bag.set("색상", "빨강");
console.log(bag);

// 처음부터 프로퍼티를 지정할 수 있다.
let myCup = new Map([
  ["색상","흰색"],
  ["재료","스뎅"],
  ["용량","450ml"],

]);

console.log(myCup);
bag.set("형태","미니")
bag.set("용도", "데일리")
console.log(bag);

// set()여러개 추가 시 연결해서 사용. => 체이닝
bag.set("type","백펙").set("purpose", "책가방");
console.log(bag);

console.log(bag.size);
console.log(bag.get("색상"))
console.log(bag.has("색상"))
console.log(bag.has("color"))
console.log(bag.delete("type"))
console.log(bag);
console.log(bag.delete("name"));

bag.clear();
console.log(bag);

// 맵은 순서를 가지고 있다 => 이터러블 객체
// 반복문을 활용하여 키 값을 가져 올 수 있다.

for (key of myCup.keys()) {
  console.log(key);
}

// values 출력
for (value of myCup.values())
{
  console.log(value);
}

// key, value 출력
for (entry of myCup.entries()) {
  console.log(entry);
}

// Set() => 중복을 허용하지 않는다.
// 순서가 있다.
let numSet1 = new Set()
numSet1.add("one");
numSet1.add("two");
console.log(numSet1);

let numSet2 = new Set([1,2,3]);
console.log(numSet2);

let numSet3 = new Set([1,2,3,4,5,2,1,3,2,4,5]);
console.log(numSet3);

let student = new Set();
student.add("홍길동").add("김길동").add("박길동");
console.log(student);

console.log(student.entries());

// values()메서드를 사용하여 languages 객체에 저장된 언어를 반복문으로 출력
// languages 는 셋으로 값을 지정
let languages = new Set(["js", "c", "python", "js", "c"]);

for(let language of languages.values())
{
  console.log("언어 : ", language);
}