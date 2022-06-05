import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const inputValueHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const submitHanlder = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHanlder} className="flex justify-between">
      <input
        type="text"
        onChange={inputValueHandler}
        value={todo}
        className="rounded-xl bg-white p-2"
      />
      <button
        type="submit"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white pb-1 text-3xl font-semibold text-pink-400 drop-shadow-md active:bg-zinc-200"
      >
        +
      </button>
    </form>
  );
};

export default TodoForm;
