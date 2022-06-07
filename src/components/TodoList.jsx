import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          completeHandler={() => onComplete(todo.id)}
          deleteHandler={() => onDelete(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
