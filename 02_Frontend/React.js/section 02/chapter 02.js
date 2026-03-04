// 단락 평가

function returnFalse() {
  //   console.log("False 함수");
  return false;
}

function returnTrue() {
  //   console.log("True 함수");
  return true;
}

// console.log(returnFalse() && returnTrue());
// 첫번째 피연산자 returnFalse()가 이미 false이므로 바로 결과가 나옴. -> false만 출력

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "한태영" });
