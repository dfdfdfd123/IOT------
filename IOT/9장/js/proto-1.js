// 함수 밖에서 프로토타입을 사용해 생성자 함수의 메서드 정의
// 프로퍼티는 함수 안에, 메서드는 프로토타입을 사용해서 정의

function newBook(title, pages, done)
{
  // 프로퍼티
  this.title = title;
  this.pages = pages;
  this.done = done;
}

// 메서드 생성
newBook.prototype.finish = function() {
  this.done === false ? str = "읽는 중" : str = "완독";
  return str;
}

const book1 = new Book("모던 자바 스크립트", 650, false);
const book2 = new Book("JAVA", 550, true);

document.write(`<hr><h2>클래스로 객체 만들기</h2>`)
document.write(`${book1.title} = ${book1.pages}쪽 - ${book2.finish()}<br>`);
document.write(`${book2.title} = ${book1.pages}쪽 - ${book2.finish()}<br>`);