import "./App.css";
import Editer from "./components/Editer";
import Header from "./components/Header";
import List from "./components/List";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Editer />
      <List />
    </div>
  );
}

export default App;
