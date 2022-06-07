import React, { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodo, edit }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputValueHandler = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter todo!");
      return;
    }

    submitTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHanlder} className="mb-3 flex justify-between">
      {edit ? (
        <>
          <input
            type="text"
            onChange={inputValueHandler}
            value={inputValue}
            placeholder={"Update todo"}
            ref={inputRef}
            className="rounded-xl bg-white p-2"
          />
          <button
            type="submit"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white pb-1 text-xs font-bold text-pink-400 drop-shadow-md transition-all duration-300 active:bg-zinc-200"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            onChange={inputValueHandler}
            value={inputValue}
            placeholder={"Add todo"}
            ref={inputRef}
            className="rounded-xl bg-white p-2"
          />
          <button
            type="submit"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white pb-1 text-3xl font-semibold text-pink-400 drop-shadow-md transition-all duration-300 active:bg-zinc-200"
          >
            +
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
