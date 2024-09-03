"use client";

import { useDebounce } from "@/app/_hooks/useDebounce";
import { useSearchForUserMutation } from "@/app/_redux/features/creatorsApiSlice";
import { request } from "http";
import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "next/navigation";

interface SearchArticleProps {
  handleFilter: ({ param, filter }: { param: string; filter: string }) => void;
}

export default function SearchArticle({ handleFilter }: SearchArticleProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState(
    decodeURIComponent(params.get("value") || "")
  );
  const debouncedValue = useDebounce(inputValue, 1000);

  useEffect(
    function () {
      if (debouncedValue !== "" && debouncedValue.trim().length < 3) {
        setError("Wpisz co najmniej 3 znaki");
      } else {
        setError("");
        if (debouncedValue.trim().length >= 3)
          handleFilter({
            param: "value",
            filter: encodeURIComponent(debouncedValue),
          });
      }
      if (debouncedValue === "") handleFilter({ param: "value", filter: "" });
    },
    [debouncedValue, handleFilter]
  );

  useEffect(
    function () {
      setInputValue(decodeURIComponent(searchParams.get("value") || ""));
    },
    [searchParams, setInputValue]
  );

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full max-w-[400px]">
        <div className="h-10 w-full border-2 rounded-md grid grid-cols-[30px_1fr_30px] items-center px-1 hover:border-mainGreen transition-colors duration-300">
          <div className="flex justify-center items-center">
            <IoSearchOutline size={20} />
          </div>
          <input
            type="text"
            placeholder="Wyszukaj materiał..."
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
        <p className="h-4 text-xs text-red-500">{error}</p>
      </div>
    </div>
  );
}
