"use client";

import { useDebounce } from "@/app/_hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export default function CreatorsFilters() {
  const paramsHk = useSearchParams();
  const [inputValue, setInputValue] = useState(
    decodeURIComponent(paramsHk.get("value") || "")
  );
  const [error, setError] = useState("");
  const router = useRouter();
  const path = usePathname();
  const debouncedValue = useDebounce(inputValue, 1000);

  const handleFilter = useCallback(
    ({ param, filter }: { param: string; filter: string }) => {
      const params = new URLSearchParams(paramsHk);
      if (filter === "") {
        params.delete(param);
      } else {
        params.set(param, filter);
        params.set("page", "1");
      }
      router.replace(`${path}?${params.toString()}`, { scroll: false });
    },
    [paramsHk, router, path]
  );

  useEffect(() => {
    const params = new URLSearchParams(paramsHk);
    if (!paramsHk.has("sort_order")) {
      params.set("sort_order", "desc");
    }
    if (!paramsHk.has("sort_by")) {
      params.set("sort_by", "views");
    }
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }, [paramsHk, router, path]);

  useEffect(
    function () {
      if (debouncedValue !== "" && debouncedValue.trim().length < 3) {
        setError("Wpisz co najmniej 3 znaki");
      } else {
        setError("");
        if (debouncedValue.trim().length >= 3) {
          handleFilter({
            param: "value",
            filter: encodeURIComponent(debouncedValue),
          });
        }
      }
      if (debouncedValue === "") handleFilter({ param: "value", filter: "" });
    },
    [debouncedValue, handleFilter]
  );

  useEffect(
    function () {
      setInputValue(decodeURIComponent(paramsHk.get("value") || ""));
    },
    [paramsHk, setInputValue]
  );

  return (
    <div className="relative flex justify-start items-center flex-col sm550:flex-row sm550:items-start w-full gap-2 max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] mx-auto mb-2 mt-12 sm550:mt-16 lg:mt20">
      <select
        className="px-4 h-10 w-full max-w-[340px] sm550:max-w-[220px] border-2 rounded-md outline-none focus:border-mainGreen hover:border-mainGreen transition-colors duration-300 z-10"
        onChange={(e) =>
          handleFilter({ param: "sort_by", filter: e.target.value })
        }
        value={paramsHk.get("sort_by") || "follower_count"}
      >
        <option value="follower_count">Obserwujący: Malejąco</option>
        <option value="article_count">Materiały: Malejąco</option>
      </select>
      <div className="mb-5 w-full max-w-[340px] sm550:max-w-[400px]">
        <div className="h-10 w-full border-2 rounded-md grid grid-cols-[30px_1fr_30px] items-center px-1 hover:border-mainGreen transition-colors duration-300">
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
    </div>
  );
}
