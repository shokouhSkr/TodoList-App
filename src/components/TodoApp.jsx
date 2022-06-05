import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container text-zinc-800">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
