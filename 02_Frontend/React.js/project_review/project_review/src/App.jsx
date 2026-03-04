import "./App.css";
import { useState, useRef } from "react";
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
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <>
      <div>
        <Editer onCreate={onCreate} />
        <Header />
        <List todos={todos} />
      </div>
    </>
  );
}

export default App;
