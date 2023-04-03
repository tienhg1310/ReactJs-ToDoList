import "./App.css";
import React, { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}></TodoInput>
        <h1 className="app-heading">TODO</h1>
        <hr></hr>
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} item={listItem} deleteItem={deleteListItem}></TodoList>;
        })}
      </div>
    </div>
  );
}

export default App;
