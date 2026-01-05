// Truthy와 Falsy

// 1. Falsy한 값 -> 거짓으로 판별됨
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값 -> 7가지 제외하면 모두 Truthy
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) {
    // fasly한 값 활용 : !person
    console.log("person의 값이 없음");
  }
  console.log(person.name);
}

let person = { name: "한태영" };
printName(person);
