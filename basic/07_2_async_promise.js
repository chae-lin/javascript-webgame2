"use strict";

// Promise는 자바스트립트 내장 object, 비동기적인 것을 수행할 때 사용.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new promise is created, the executor runs automatically. (프로미스를 만드는 순간 네트워크 요청이 바로 일어남)
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read, files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("뭐가 됐든 끄읏"));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🐓");
    }, 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(`${hen} => 🥚`);
      reject(new Error(`error!`));
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => 🍳`);
    }, 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// 한가지만 받아와 전달하는 경우 아래와 같이 생략 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🥖";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
