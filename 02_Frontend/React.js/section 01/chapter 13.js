// 콜백 함수

// 1. 콜백 함수
function main(value) {
  //   console.log(1);
  //   console.log(2);
  value();
  //   console.log("end");
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백 함수의 활용
// -> 중복 코드를 없애면서 간결하게 코드를 작성할 수 있다.
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
