import React, { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodo, edit }) => {
  const [inputValue, setInputValue] = useState(edit ? edit.text : "");
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
      <input
        type="text"
        onChange={inputValueHandler}
        value={inputValue}
        placeholder={edit ? "Update todo" : "Add todo"}
        ref={inputRef}
        className="h-1/2 rounded-2xl bg-white p-2"
      />
      <button
        type="submit"
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-white pb-1 ${
          edit ? "text-xs" : "text-3xl"
        } font-bold text-pink-400 drop-shadow-md transition-all duration-300 active:bg-zinc-200`}
      >
        {edit ? "Update" : "+"}
      </button>
    </form>
  );
};

export default TodoForm;
