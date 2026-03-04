// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date("1997-01-07-10:10:10");

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
let date3 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // JS에서 Month는 0부터 시작해서 +1을 해줘야함
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(5);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 표준 포맷
console.log(date1.toLocaleString()); // 현지화 된 형태
