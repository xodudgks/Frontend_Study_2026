const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;

// section 07 3단계
// 1. props 받기 : 부모에게서 onClickButton이라는 함수를 받는다.
// 2. "버튼을 누르면 +1 해줘"와 같은 기능을 할 예정
// 3. return 이후 : 버튼 만들기
// 4. 클릭 이벤트로 각 버튼의 onClick에 화살표 함수를 연결하고 그 안에서 onClickButton 함수 실행
