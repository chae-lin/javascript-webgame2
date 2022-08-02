// 1. Literals and properties
const obj1 = { name: "kim", age: 20 }; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 2. Computed properties (계산된 속성)
// - console.log(obj1.name);
// 코딩하는 순간 키에 해당하는 값을 받아올 때

// - console.log(obj1["name"]);
// 키가 런타임에서 결정될 때.

// 3. Property value shorthand
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor Function
// 위처럼 순수하게 오브젝트만 생성하는 함수는 대문자로 함수이름 시작, return을 this로 변경
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this
}

const person1 = new Person("kim", 18);

// 5. in operator : 해당하는 오브젝트 안에 키가 있는지 확인 (key in obj)
// console.log("name" in obj1);

// 6. for ..in vs for ..of
// for(key in obj)
// for (key in obj1) console.log(key); -> name, age

// for(value of iterable)
// const array = [1, 2, 3, 4, 5];
// for (value of array) console.log(value); -> 1, 2, 3, 4, 5

// 7. Fun cloning

// way 01 (old)
const user = { name: "kim", age: 20 };

const user1 = {};
for (key in user) {
  user1[key] = user[key];
}

// way 02
const user2 = Object.assign({}, user);
