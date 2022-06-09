import React from "react";

const NavBar = ({ unCompletedTodos, onSelect, status }) => {
  return (
    <header className="mb-3 flex w-full justify-between bg-pink-400 p-4 font-semibold text-white">
      {!unCompletedTodos ? (
        <h1>Set some today todos!</h1>
      ) : (
        <>
          <h1>
            <span className="mr-1 h-3 w-3 rounded-full bg-white px-2 py-0.5 font-bold text-pink-400">
              {unCompletedTodos}
            </span>
            are not completed
          </h1>
        </>
      )}

      <select onChange={onSelect} value={status} className="mb-3 text-slate-800">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
