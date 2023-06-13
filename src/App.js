import "./App.scss";
import React from "react";
import { DataList } from "./ContextFile";
import { Form } from "./Form";
import { TodoList } from "./ToDoList";

function App() {
  return (
    <div className="app">
      <h1>List of things to do</h1>
      <DataList>
        <Form />
        <TodoList />
      </DataList>
    </div>
  );
}

export default App;
