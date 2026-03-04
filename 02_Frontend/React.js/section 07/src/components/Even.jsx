import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리 함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;

// section 07 6단계
// 1. Even.jsx 파일 만들기
// 2. Import: useEffect를 불러오고 useEffect 안에서 함수를 return 하면, 그 함수는 컴포넌트가
// 사라질 때 실행되도록 한다.
// 3. 콘솔에 "unmount"라고 찍히게 한다.
// 4. 화면: div 태그에 "짝수입니다"라고 적히게 한다.
