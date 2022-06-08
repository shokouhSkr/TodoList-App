import React from "react";

const NavBar = ({ unCompletedTodos }) => {
  return (
    <header className="mb-3 w-full bg-pink-400 p-4 font-semibold text-white">
      {!unCompletedTodos ? (
        <h1>Set some today todos!</h1>
      ) : (
        <h1>
          <span className="mr-1 h-3 w-3 rounded-full bg-white px-2 py-0.5 font-bold text-pink-400">
            {unCompletedTodos}
          </span>
          are not completed
        </h1>
      )}
    </header>
  );
};

export default NavBar;
