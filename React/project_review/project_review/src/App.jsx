import "./App.css";
import { useState } from "react";
import Editer from "./components/editer";
import Header from "./components/header";
import List from "./components/List";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "피아노 연습하기기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "기타치기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState([...mockData]);

  return (
    <>
      <div>
        <Editer />
        <Header />
        <List todos={todos} />
      </div>
    </>
  );
}

export default App;
