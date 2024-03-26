import React, { useState } from "react";

import { db } from "../lib/db";

function Block() {
  const [filteredDB, setFilteredDB] = useState([...db]);
  const handleFilter = (stack) => {
    if (stack === "All") {
      setFilteredDB([...db]);
    } else {
      setFilteredDB(db.filter((item) => item.stack.includes(stack)));
    }
  };
  return (
    <div className="min-w-[375px]">
      <div className="flex flex-wrap justify-center gap-5 py-5 bg-[#2F4063]">
        <button
          className="bg-white px-3 py-2 rounded-3xl cursor-pointer"
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className="bg-white px-3 py-2 rounded-3xl cursor-pointer"
          onClick={() => handleFilter("Next.JS")}
        >
          Next.JS
        </button>
        <button
          className="bg-white px-3 py-2 rounded-3xl cursor-pointer"
          onClick={() => handleFilter("React")}
        >
          React
        </button>
        <button
          className="bg-white px-3 py-2 rounded-3xl cursor-pointer"
          onClick={() => handleFilter("Vite")}
        >
          Vite
        </button>
        <button
          className="bg-white px-3 py-2 rounded-3xl cursor-pointer"
          onClick={() => handleFilter("Tailwind.CSS")}
        >
          Tailwind.CSS
        </button>
      </div>
      {filteredDB.map((item) => (
        <div
          key={item.id}
          className="bg-[#2F4063] pb-5 flex justify-center flex-col items-center"
        >
          <div
            className={`${item.bg} rounded-2xl px-5 pt-6 mx-5 flex justify-center w-fit`}
          >
            <img
              src={item.imagesurl}
              alt=""
              className="rounded-t-lg drop-shadow-md"
            />
          </div>
          <div className="flex flex-row justify-center gap-5">
            {item.stack.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-400 text-white w-fit p-2 rounded-lg my-5 md:text-[28px] md:px-7"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="text-white mx-5 pb-5">
            <h1 className="text-[20px] pb-5">{item.description}</h1>
            <p>{item.message}</p>
          </div>
          <div className="flex">
            <div className="bg-white mx-5 w-fit px-3 py-2 rounded-3xl cursor-pointer">
              <a href={item.website}>Visit Website</a>
            </div>
            <div className="bg-white mx-5 w-fit px-3 py-2 rounded-3xl cursor-pointer">
              <a href={item.github}>Github Repository</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Block;
