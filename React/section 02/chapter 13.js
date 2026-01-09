// 비동기 작업 처리하기 (2) Promise

// Pending : 대기
// Fulfilled : 성공 (resolve : 해결)
// Rejected : 실패 (reject : 거부)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 -> executor 함수
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
      reject("실패한 이유");
    }, 2000);
  });
  return promise;
}

const p = add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(errpr);
  });

// then 메서드
// -> promise의 비동기 작업 이후에 실행
// catch 메서드
// -> promise의 비동기 작업이 실패했을 때의 메서드
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
