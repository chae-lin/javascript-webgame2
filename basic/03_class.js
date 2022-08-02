// class: tamplate
// object: instance of a class.

// Javascript classes
// - introduced in ES6
// - synstactical sugar over prototype-based inheritance

// 1. class declarations
class Person {
  // constructor: 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hellow!`);
  }
}

const chaelin = new Person("chaelin", 20);

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.age = get 호출
    // age = set 호출
  }

  // 값을 리턴
  get age() {
    return this._age;
  }

  // 값을 설정
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Stave", "job", -1);

// 3. Fields (public, pravite)
class Experiment {
  publicField = 2;
  #privateField = 0;
  // 내부에서만 수정, 읽기 가능
}

const experiment = new Experiment();

// 4. Static properties and methods
class Article {
  static publisher = "Dream Cording";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// article1.publisher -> undefined
// Article.publisher  -> "Dream Cording"

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of `);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  draw() {
    // 부모의 draw 호출
    super.draw();
    console.log("삼각형");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(20, 20, "blue");

// 6. Class checkingL instanceOf
// instanceof는 왼쪽의 것이 오른쪽의 클래스로 만들어진 것인지의 유무 확인
// console.log(triangle instanceof Triangle);
// console.log(triangle instanceof Shape);
// console.log(triangle instanceof User);
// console.log(triangle instanceof Object); -> 자바스크립트의 모든 매소드는 Object를 상속한다.
