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
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container p-3 text-zinc-800">
      <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} />
      <TodoForm addInputValueHandler={addInputValueHandler} />
    </div>
  );
};

export default TodoApp;
