"use strict";

// - 자바스크립트는 synchronous(동기적)이다.
// - 호이스팅이된 이후 부터 순서에 맞춰 코드가 실행된다.
//   hoisiting: var, function declaration 선언들이 자동적으로 제일 위로 올라가는 것.

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback (즉각적으로, 동기적인 콜백)
function printImmediately(print) {
  // print라는 콜백하수를 전달 받음
  print();
}
printImmediately(() => console.log("sync callback"));

// ASynchronous callback (언제 실행될지 예측할 수 없는 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
// - 가독성이 떨어짐
// - 비지니스 로직을 한눈에 이해하기 어려움
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("not access"));
      }
    }, 1000);
  }
}

console.clear();
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hellow ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
