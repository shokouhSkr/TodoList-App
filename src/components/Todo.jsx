import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <div className="flex">
        <div className="mr-3">{todo.text}</div>
        <div className="mb-2 flex gap-x-3">
          <button className="rounded bg-pink-200 p-2">Edit</button>
          <button className="rounded bg-pink-200 p-2">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;