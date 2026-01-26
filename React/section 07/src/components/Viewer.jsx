const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;

// section 07 2단계
// Props (프롭스)
// 리액트에서 부모 컴포넌트 (App)이 자식 컴포넌트 (Viewer)에게 데이터를 전해주는 유일한 방법
