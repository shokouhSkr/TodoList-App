import React from "react";

const Todo = ({ todo, completeHandler, deleteHandler }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div
          onClick={completeHandler}
          className={`mr-3 ${todo.isCompleted === true ? "text-gray-400 line-through" : ""}`}
        >
          {todo.text}
        </div>
        <div className="mb-2 flex gap-x-3">
          <button className="rounded bg-pink-200 p-2">Edit</button>
          <button onClick={deleteHandler} className="rounded bg-pink-200 p-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
