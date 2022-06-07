import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          completeHandler={() => onComplete(todo.id)}
          deleteHandler={() => onDelete(todo.id)}
          editHandler={() => setEdit(todo)}
        />
      );
    });
  };

  return <div>{edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}</div>;
};

export default TodoList;
