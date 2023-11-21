// 생성자 함수 만들기 Book

function Book (title, price) {
  this.title = title;
  this.price = price;
}

// 프로토타입으로 my 메서드 추가
Book.prototype.buy = function() {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`)
}

// 객체 만들기
const book1 = new Book("자바", 25000); 
book1.buy();

// 새로운 객체 만들기 -> 기존 객체를 확장(상속) 받아 만들기
function TextBook(title, price, major)
{
  // 기존 객체의 프로퍼티 상속받아 사용
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function() {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`)
}

// 상위 객체와 하위 객체를 연결. -> 상속을 위해 사용.
Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("자바스크립트", 30000, "컴퓨터공학부");
book2.buyTextBook();
book2.buy();

