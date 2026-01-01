// 객체 (심화)

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 매서드
// -> 값이 함수인 프로퍼티

const person = {
  name: "한태영",
  // 매서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
