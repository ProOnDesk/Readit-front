"use client";

import { useDebounce } from "@/app/_hooks/useDebounce";
import { useSearchForUserMutation } from "@/app/_redux/features/creatorsApiSlice";
import { request } from "http";
import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import Spinner from "../ui/Spinner";
import UserItem from "./UserItem";

export default function SearchCreator() {
  const [inputValue, setInputValue] = useState("");
  const [searchForUser, { isLoading, data }] = useSearchForUserMutation();
  const [error, setError] = useState("");
  const [request, setRequest] = useState(false);
  const debouncedValue = useDebounce(inputValue, 1000);

  useEffect(
    function () {
      if (debouncedValue !== "" && debouncedValue.length > 2) {
        searchForUser({ value: debouncedValue });
        setRequest(true);
        setError("");
      } else {
        setRequest(false);
        if (debouncedValue === "") {
          setError("");
        } else {
          setError("Wpisz co najmniej 3 znaki");
        }
      }
    },
    [debouncedValue, searchForUser]
  );

  useEffect(
    function () {
      setRequest(false);
    },
    [inputValue]
  );

  return (
    <div className="w-full px-4 sm:px-12 mb-10 max-w-[1600px] mx-auto flex flex-col justify-center items-center sm:items-start ">
      <div className="mb-5 w-full max-w-[400px]">
        <div className="h-10 w-full border-2 rounded-md grid grid-cols-[30px_1fr_30px] items-center px-1">
          <div className="text-mainGr een flex justify-center items-center">
            <IoSearchOutline size={20} />
          </div>
          <input
            type="text"
            placeholder="Wyszukaj twórcę..."
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

      {request &&
        (!isLoading && data ? (
          <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] mb-12">
            {data.items.map((user) => (
              <UserItem user={user} key={user.id} />
            ))}
          </div>
        ) : (
          <div className="h-[370px] w-full py-10 flex justify-center items-center flex-wrap">
            <Spinner color="green" size="big" />
          </div>
        ))}
    </div>
  );
}
