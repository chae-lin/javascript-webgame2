"use strict";

// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}
const user = fetchUser();
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBansns() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBansns().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBansns();
    return `${apple} + ${banana}`;
  } catch (error) {
    console.log(error);
  }
}
pickFruits().then(console.log);

// 3. useful Promise APIs

// Promise.all: 병렬적으로 동시에 실행
function pickAllFruts() {
  // 병렬적으로 동시에 실행
  return Promise.all([getApple(), getBansns()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruts().then(console.log);

// primuse.race: 전달된 프로미스 중 가장 빠른 것 값만 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBansns()]);
}
pickOnlyOne().then(console.log);
