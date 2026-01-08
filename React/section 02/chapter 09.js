// 배열 메서드 (3) 변형
// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "한태영", hobby: "피아노" },
  { name: "이정환", hobby: "피아노" },
  { name: "홍길동", hobby: "독서" },
];

const pianoPeople = arr1.filter((item) => {
  if (item.hobby === "피아노") return true;
});

// console.log(pianoPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    return 1; // sort에서 양수를 반환하면 더 작은 값이 앞에 온다.
  } else if (a < b) {
    return -1; // 더 큰 값이 앞에 온다.
  } else {
    return 0; // 같은 값이면 그대로 유지
  }
});
// console.log(arr3);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "taeyoung"];
const joined = arr6.join("-"); // "-" 구분자 변형 가능
console.log(joined);
