import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addInputValueHandler = (inputValue) => {
    // console.log(inputValue);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // console.log(id);

    const index = todos.findIndex((todo) => todo.id === id);
    // console.log(index);

    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container p-3 text-zinc-800">
      <TodoList todos={todos} onComplete={completeTodo} />
      <TodoForm addInputValueHandler={addInputValueHandler} />
    </div>
  );
};

export default TodoApp;
