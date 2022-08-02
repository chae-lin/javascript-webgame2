// 1. Declaration
const arr1 = new Array();
const arr2 = [];

// 2. Index position
const fruits = ["🍌", "🍎", "🍊", "🍋", "🍇", "🍓"];
const banana = fruits[0];

// 3. Looing over an aray
// a.for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b.forEach
fruits.forEach((element) => {
  console.log(element);
});
// c.for of
for (const element of fruits) {
  console.log(element);
}

// 4. Addtion, deletion, copy

// push: add an item to end
// pop: remove an item to end

// unshift: add an item to the benigging
// shitf: remove an item from the benigging

// !Note!
// shift, unshift는 push, pop에 바해 매우 느리다.

// splice: remove an item by index position
const fruitsSplice = fruits.splice(1, 3);
// fruits.splice(1, 3, "🥑");
// fruits의 1번째 인덱스부터 3개를 지우고 그자리에 아보카도 추가!

// combine tow arrays
const newFruits = fruits.concat(["🥭", "🍍", "🍌"]);

// 5. Searching

// find the index
console.log(newFruits.indexOf("🍌"));
// - 해당하는 값이 없는 경우 -1
// - 제일 첫번째에 해당하는 값의 인덱스를 출력

// include
console.log(newFruits.includes("🍍"));
// - 해당하는 값이 없는 경우 false

// lastIndexOf
console.log(newFruits.lastIndexOf("🍌"));
// - 제일 마지막에 있는 값의 인덱스를 출력
