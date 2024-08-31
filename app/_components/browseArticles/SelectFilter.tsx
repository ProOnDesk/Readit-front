import React, { Dispatch } from "react";
import SearchArticle from "./SearchArticle";
import { motion } from "framer-motion";

interface SelectFilterProps {
  filter: "popular" | "new" | "rating" | "price";
  setFilter: Dispatch<
    React.SetStateAction<"popular" | "new" | "rating" | "price">
  >;
  setOrder: Dispatch<React.SetStateAction<"asc" | "desc">>;
  setInputValue: Dispatch<React.SetStateAction<string>>;
  debouncedValue: string;
  inputValue: string;
}

export default function SelectFilter({
  filter,
  setFilter,
  setInputValue,
  setOrder,
  debouncedValue,
  inputValue,
}: SelectFilterProps) {
  return (
    <div className="max-w-[1800px] mx-auto w-full flex justify-between items-start flex-col lg:flex-row pt-10 lg:pt-14 pb-4 px-4 md:px-14">
      <div className="relative flex justify-center items-center flex-col md:flex-row md:items-start w-full gap-2 max-w-[750px]">
        <select
          className="px-4 h-10 w-full max-w-[400px] md:max-w-[220px] border-2 rounded-md outline-none focus:border-mainGreen hover:border-mainGreen transition-colors duration-300 z-10"
          onChange={(e) =>
            setFilter(e.target.value as "popular" | "new" | "rating" | "price")
          }
        >
          <option value="popular">Popularność</option>
          <option value="rating">Oceny użytkowników</option>
          <option value="new">Data wydania</option>
          <option value="price">Cena</option>
        </select>

        <select
          className="px-4 h-10 w-full max-w-[400px] md:max-w-[220px] border-2 rounded-md outline-none focus:border-mainGreen hover:border-mainGreen transition-colors duration-300"
          onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
        >
          <option value="desc">Malejąco</option>
          <option value="asc">Rosnąco</option>
        </select>
        <SearchArticle
          debouncedValue={debouncedValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className="mt-2 w-full lg:w-fit lg:max-w-fit max-w-[400px] mx-auto lg:m-0 md:max-w-full self-center lg:pb-4">
        <p className="lg:text-right">Materiały: 1232</p>
      </div>
    </div>
  );
}
