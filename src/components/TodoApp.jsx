import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (inputValue) => {
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

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    // console.log(status);
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;

      default: // "All"
        setFilteredTodos(todos);
    }
  };

  const selectTodos = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container p-3 text-zinc-800">
      <NavBar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        onChange={selectTodos}
        selectedOption={selectedOption}
      />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
      <TodoForm submitTodo={addTodoHandler} />
    </div>
  );
};

export default TodoApp;
