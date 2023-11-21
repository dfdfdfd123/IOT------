class Pet {

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    document.write(`<h1>${this.color} ${this.name}가 달린다.</h1><hr>`)

  }
}

const pet1 = new Pet("바둑이", "하얀");
pet1.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name,color);
    this.breed = breed;
  }

  viewInfo() {
    document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}</h1><hr>`)

  }
}

const bor1 = new Cat("보라", "흰색", "페르시안 친칠라");
bor1.viewInfo();
bor1.run();