// 1. use strit
// added in es5
"use strit";

// 2.variable (read, write)
//  (1) let (added in es6)

//  (2) var (don't ever use this!)
//   - hoisting (move declaration from bottom to top)
//   - has not block scope

//  (3) constan (read only)
//  imutable: 값을 변경할 수 없음 VS mutable(데이터 타입): 값을 변경할 수 았음
//  faor imputable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 3.variable types
//  - 원시: string, number, boolean, null, undefind, symbol
//  - 객체: function (first-class function)
//  (+ bigInt: const a=12345678900000000n)
//  (+ 같은 symbol을 만들고 싶을 때: const symbol = Symbol.for('id'))
