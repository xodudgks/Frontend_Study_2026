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

// 5.6, 5.7 실습 코드

// import "./App.css";
// import { useState } from "react";

// import Bulb from "./components/Bulb.jsx";
// import Counter from "./components/Counter.jsx";

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;

// 5.8 이후 실습 코드

import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      <Register />
      <HookExam />
    </>
  );
}

export default App;
