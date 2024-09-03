"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SearchArticle from "./SearchArticle";

export default function SelectFilter({
  materialsCount,
}: {
  materialsCount: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  function handleFilter({ param, filter }: { param: string; filter: string }) {
    const params = new URLSearchParams(searchParams);
    if (filter === "") {
      params.delete(param);
    } else {
      params.set(param, filter);
    }
    // params.set("page", "1");
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!searchParams.has("sort_order")) {
      params.set("sort_order", "desc");
    }
    if (!searchParams.has("sort_by")) {
      params.set("sort_by", "views");
    }
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, path]);

  return (
    <div className="max-w-[1800px] mx-auto w-full flex justify-between items-start flex-col lg:flex-row pt-10 lg:pt-14 pb-4 px-4 md:px-14">
      <div className="relative flex justify-center items-center flex-col md:flex-row md:items-start w-full gap-2 max-w-[750px]">
        <select
          className="px-4 h-10 w-full max-w-[400px] md:max-w-[220px] border-2 rounded-md outline-none focus:border-mainGreen hover:border-mainGreen transition-colors duration-300 z-10"
          onChange={(e) =>
            handleFilter({ param: "sort_by", filter: e.target.value })
          }
          value={searchParams.get("sort_by") || "views"}
        >
          <option value="views">Popularność</option>
          <option value="rating">Oceny użytkowników</option>
          <option value="date">Data wydania</option>
          <option value="price">Cena</option>
        </select>

        <select
          className="px-4 h-10 w-full max-w-[400px] md:max-w-[220px] border-2 rounded-md outline-none focus:border-mainGreen hover:border-mainGreen transition-colors duration-300"
          onChange={(e) =>
            handleFilter({ param: "sort_order", filter: e.target.value })
          }
          value={searchParams.get("sort_order") || "desc"}
        >
          <option value="desc">Malejąco</option>
          <option value="asc">Rosnąco</option>
        </select>
        <SearchArticle handleFilter={handleFilter} />
      </div>
      <div className="mt-2 w-full lg:w-fit lg:max-w-fit max-w-[400px] mx-auto lg:m-0 md:max-w-full self-center lg:pb-4 hidden lg:block">
        <p className="lg:text-right text-sm text-slate-400">
          Materiały: {materialsCount || "--"}
        </p>
      </div>
    </div>
  );
}
