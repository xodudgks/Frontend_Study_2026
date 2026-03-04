import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  // 7.2강 (useEffect 도입)
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  // 의존성 배열 -> dependency array (deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

// section 07 1단계
// 1. 뼈대 세우기
// 2. CSS 파일 import
// 3. section 태그 3개를 나누어서 구역을 나눈다.

// section 07 4단계
// 1. Import : useState를 react에서 불러오고 Viewer와 Controller 컴포넌트를 불러온다.
// 2. State 생성 : App 함수 안에서 count 상태를 만든다.
// 3. 함수 생성 (이벤트 처리) : onClickButton 함수를 만들고 value를 매개변수로 받아서
// setCount(count + value)를 실행한다.
// 4. 연결 : section 태그에 각각 컴포넌트 연결을 한다.

// section 07 5단계
// 1. 탄생 감지 (Mount) : 앱이 처음 켜질 때 콘솔에 "mount"라고 딱 한 번만 출력하게 한다.
// -> 이때 의존성 배열(Dependency Array)을 빈 배열 []로 줘야 합니다.
// 2. 변화 감지 (Update) : 무언가 바뀔 때마다 "update"라고 출력
// -> 근데 처음 켜질 때(Mount)는 출력 안 되고, 진짜 버튼을 눌러서 숫자가 바뀔 때만 뜨게한다.

// section 07 7단걔
// 1. 조건부 렌더링 (삼항 연산자) : Viewer 컴포넌트 바로 밑에
// count를 2로 나눈 나머지가 0이면(짝수면) Even을 보여주고, 아니면 null(아무것도 안 보임)을 보여준다.

// section 07 8단계
// 1. State 추가 : input이라는 이름의 state를 만든다.
// 2. 태그 추가 : 제일 위에 비워뒀던 첫 번째 <section> 안에 <input /> 태그를 만든다.
// 3. 데이터 연결 (Two-way Binding) :
// -> input 태그의 value 속성에 방금 만든 state(input)를 넣는다.
// -> input 태그의 onChange 속성에 함수를 연결해서, 타이핑할 때마다 setInput으로 값을 업데이트한다.

// section 07 9단계 (추가)
// 실험 1. 버튼만 눌러보기 (count 변경)
// -> +1 버튼을 눌러본다. => 결과 : count가 바뀌었으니 콘솔에 로그가 찍힘
// 실험 2. 글자만 쳐보기 (input 변경)
// -> 입력창에 "A"라고 친다. => 결과 : input이 바뀌었으니 콘솔에 로그가 찍힘
