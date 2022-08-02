// Function
// - 프로그램을 구성하는 기본적인 빌딩 블록
// - 서브프로그램으로 여러번 재사용 가능한 장점
// - 한가지의 테스크나 값을 계산하기 위해 사용

// 1. Function declaration
// - 한가의 함수는 한가지의 역활만 하도록
// - doSometing, command, varb
// - function은 자바스크립트에서 object

// 2. Parameters
// - premitive 타입: value 전달
// - object 타입: reference 전달

// 3. Default parameters (added in ES5)
function name(params = unknown) {
  console.log(params);
}

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

// 5. erly return, erly exit
// (bad)
function upgradeUserBad(user) {
  if (user.point > 10) {
    //   upgrade losic ...
  }
}
// (good)
function upgradeUserGood(user) {
  if (user.point <= 10) {
    return;
  }
  //   upgrade losic ...
}

// 6. Callback function using function exresiion.
function exCallback(age, callback) {
  if (age > 20) {
    callback();
  }
}
