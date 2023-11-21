// 클래스 생성
class BookC {
  constructor(title, price) {
    this.title = title;
    this,price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price} 원에 구매하였습니다.`)
  }
}

// 새로운 클래스 생성 - 상속 받기
class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title.price);
    this.major = major;
  }

  buyTextbook () {
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);

  }
}

const book2 = new TextBookC("자바스크립트", 30000, "컴퓨터공학")
book2.buyTextbook();
book2.buy();