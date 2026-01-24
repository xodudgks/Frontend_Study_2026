// 5.1 ~ 5.5 실습 코드

// import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

// function App() {
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       <Button {...buttonProps} />
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <Header />
//       </Button>
//     </>
//   );
// }

// export default App;

// 5.6 이후 실습 코드
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
