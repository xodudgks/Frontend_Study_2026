// 객체 (기본)

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value 형태
let person = {
  name: "한태영",
  age: 22,
  hobby: "밴드",
  job: "FE Developer",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티 접근법 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"]; // ""를 쓰지 않으면 변수로 인식하게 되므로 신택스 오류 발생함

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "artist";
person["favoriteFood"] = "라면";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티를 존재 유무를 확인하는 방법 (in 연산자)
// -> boolen 형식으로 출력값이 나옴
let result1 = "name" in person;
let result2 = "cat" in person;
