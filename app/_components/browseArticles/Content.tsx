"use client";

import React, { useEffect, useState } from "react";
import SelectFilter from "./SelectFilter";
import { useDebounce } from "@/app/_hooks/useDebounce";
import Filters from "./Filters";

export default function Content() {
  const [filter, setFilter] = useState<"popular" | "new" | "rating" | "price">(
    "popular"
  );
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);

  useEffect(
    function () {
      if (debouncedValue !== "" && debouncedValue.length > 2) {
        console.log("searching for user");
      }
    },
    [debouncedValue]
  );

  console.log(filter);
  return (
    <div className="w-full max-w-[1800px] mx-auto">
      <SelectFilter
        filter={filter}
        setFilter={setFilter}
        setOrder={setOrder}
        setInputValue={setInputValue}
        debouncedValue={debouncedValue}
        inputValue={inputValue}
      />
      <div className="grid md:grid-cols-[320px_1fr]">
        <Filters />
        <div>dasdsa</div>
      </div>
    </div>
  );
}
