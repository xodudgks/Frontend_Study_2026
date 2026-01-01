// 함수 표현식과 화살표 함수 ☆

// 1. 함수 표현식
// -> 선언문으로 만들지 않고 varB처럼 값으로 함수를 생성하는 방식
// -> 호이스팅 대상이 되지 않는다.
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //익명 함수
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => value + 1;

console.log(varC(10));
