// 연산자 (기본)

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 30;

// 3. 복합 연산자
let num7 = 10;
num7 += 20; // -> 원래 값에서 20을 더 추가해라.
num7 -= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // -> 1만 증가
++num8; // 전위 연산 -> 변수명 앞에 증감 연산자를 입력하는 것 (바로 적용)
num8--; // 후위 연산 (그 다음 줄에서부터 적용)

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, false);

// 6. 비교 연산자
let comp1 = 1 === 2; // =을 2개만 쓰면 자료형까지 비교가 안됨. 그래서 자바스크립트에서는 =을 3개 쓴다.
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
