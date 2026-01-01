// 연산자 (심화)

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// var1은 undefined, var2는 초기화가 된 값 -> 결과값 : 10 (var2)

let var5 = var1 ?? var3;
// 결과값 : 20

let var6 = var2 ?? var3;
// 둘 다 존재하는 값이면 그냥 맨 처음에 있는 값을 결과값으로 출력 -> 결과값 : var2

let userName = "한태영";
let userNickname = "hty";

let displayName = userName ?? userNickname;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
let t1 = typeof var7;

// 3. 삼항 연산자 ☆
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용할 때 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수라면 "짝" 저장, 홀수라면 "홀" 저장
let res = var8 % 2 === 0 ? "짝수" : "홀수";
