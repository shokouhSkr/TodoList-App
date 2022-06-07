import React from "react";

const Todo = ({ todo, completeHandler }) => {
  return (
    <div>
      <div className="flex">
        <div className={`mr-3 ${todo.isCompleted === true ? "text-gray-400 line-through" : ""}`}>
          {todo.text}
        </div>
        <div className="mb-2 flex gap-x-3">
          <button className="rounded bg-pink-200 p-2">Edit</button>
          <button onClick={completeHandler} className="rounded bg-pink-200 p-2">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
