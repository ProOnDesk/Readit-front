"use client";

import { useDebounce } from "@/app/_hooks/useDebounce";
import { useSearchForArticleMutation } from "@/app/_redux/features/articlesApiSlice";
import { useSearchForUserMutation } from "@/app/_redux/features/creatorsApiSlice";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Spinner from "../ui/Spinner";
import Link from "next/link";

export default function NavBrowseInput() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  const [searchForUser, { isLoading: isLoadingUsers, data: searchUsers }] =
    useSearchForUserMutation();
  const [
    searchForArticle,
    { isLoading: isLoadingArticles, data: searchArticles },
  ] = useSearchForArticleMutation();

  const [request, setRequest] = useState(false);

  useEffect(
    function () {
      if (debouncedValue !== "" && debouncedValue.length > 2) {
        searchForUser({ value: debouncedValue });
        searchForArticle({ value: debouncedValue });
        setRequest(true);
      } else {
        setRequest(false);
      }
    },
    [debouncedValue, searchForUser, searchForArticle]
  );

  useEffect(
    function () {
      setRequest(false);
    },
    [inputValue]
  );

  return (
    <div className="relative h-10 w-[280px] border-2 rounded-md grid grid-cols-[30px_1fr_30px] items-center px-1">
      <div className="flex justify-center items-center">
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

      {(request || inputValue.length > 2) && (
        <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white rounded-md border p-8">
          <div className="w-full h-full">
            {(isLoadingArticles || isLoadingUsers || inputValue.length > 2) && (
              <div className="flex justify-start items-center gap-3 font-medium w-full p-2">
                <div className="flex justify-center items-center">
                  <IoSearchOutline size={20} />
                </div>
                <p className="flex justify-center items-center gap-1">
                  Wyszukiwanie <span>&quot;{inputValue}&quot;</span>
                </p>
              </div>
            )}

            <div className="flex justify-center items-start gap-5 h-full">
              {searchArticles && searchArticles.items.length > 0 && (
                <div className="flex flex-col justify-center items-center w-full mt-3">
                  <p className="text-left self-start font-medium px-2">
                    Materiały
                  </p>
                  <div className="flex flex-col gap-1 mt-3">
                    {searchArticles.items.slice(0, 5).map((article) => (
                      <Link
                        key={article.id}
                        href={`/materials/${encodeURIComponent(article.slug)}`}
                        className="w-[350px] flex justify-start items-center p-2 hover:bg-whiteSecond rounded-md transition-colors duration-300"
                        onClick={() => setInputValue("")}
                      >
                        <div className="w-16 h-10 rounded-md overflow-hidden">
                          <img
                            src={article.title_image_url}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="ml-2 line-clamp-2 text-sm">
                          {article.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {searchUsers && searchUsers.items.length > 0 && (
                <div className="flex flex-col justify-center items-center w-full mt-3">
                  <p className="text-left self-start font-medium px-2">
                    Twórcy
                  </p>
                  <div className="flex flex-col gap-1 mt-3">
                    {searchUsers.items.slice(0, 5).map((user) => (
                      <Link
                        key={user.id}
                        href={`/creators/${user.id}`}
                        className="w-[230px] flex justify-start items-center p-2 hover:bg-whiteSecond rounded-md transition-colors duration-300"
                        onClick={() => setInputValue("")}
                      >
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={user.avatar}
                            alt={user.first_name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="ml-2 line-clamp-2 text-sm">
                          {user.first_name} {user.last_name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
