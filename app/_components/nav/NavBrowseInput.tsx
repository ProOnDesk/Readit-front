"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function NavBrowseInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="h-10 w-[280px] border-2 rounded-md grid grid-cols-[30px_1fr_30px] items-center px-1">
      <div className="text-mainGr een flex justify-center items-center">
        <IoSearchOutline size={20} />
      </div>
      <input
        type="text"
        placeholder="Przeszukaj..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full outline-none px-3 py-2 text-sm"
      />
      {inputValue !== "" && (
        <button
          onClick={() => setInputValue("")}
          className="text-main Green flex justify-center items-center"
        >
          <IoCloseOutline size={24} />
        </button>
      )}
    </div>
  );
}
