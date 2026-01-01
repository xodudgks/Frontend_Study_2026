// 함수

function getArea(width, height) {
  // 매개변수

  function another() {
    // 중첩함수
    console.log("another");
  }

  another();

  let area = width * height;

  return area; // 반환값
}

let area1 = getArea(30, 50); // 인수
console.log(area1);

let area2 = getArea(10, 20);
console.log(area2);

// 참고
// -> C나 Java와 같은 언어는 선언이 이루어지지 않은 함수를 미리 호출하면 오류가 발생
// -> JavaScript : 호이스팅 기능이 있기 때문에 정상적으로 실행된다.
