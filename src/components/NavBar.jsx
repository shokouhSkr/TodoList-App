import React from "react";
import Select from "react-select";

const selectOptions = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
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

      <Select
        value={selectedOption}
        onChange={onChange}
        options={selectOptions}
        className="text-slate-800"
      />
    </header>
  );
};

export default NavBar;
