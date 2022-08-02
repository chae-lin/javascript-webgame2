// 서버와 데이터를 주고 받을 떄 XML, JSON 형식을 통해 주고받음

// 데이터를 주고 받는 방식
// - XMLHttpRequest;
// - fetch();

// JSON
// - 데이터를 주고받을 때 쓸 수 있는 가장 간단한 파일 포맷
// - 텍스트를 기반으로한 가벼운 구조
// - 눈으로 읽기 편하고
// - 키-벨류 형식으로 이루어진 파일 포맷
// - 데이터를 서버와 주고받을 때 serialization(직렬화)를 하고 데이터를 전송할 때 사용
// - 프로그래밍 언어와 플랫폼에 상관없이 사용 가능

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
json = JSON.stringify(["apple", "banana"]);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // 함수는 object의 데이터가 아니기 때문에 JSON에 포함 안됨, Symbol도 마찬가지.
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);

// name, color에 해당하는 프로퍼티만 전달됨.
json = JSON.stringify(rabbit, ["name", "color"]);

// callback 함수 (세밀한 통제를 원할 떄)
json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "chaelin" : value;
});

// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json);

const obj2 = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});

// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator
