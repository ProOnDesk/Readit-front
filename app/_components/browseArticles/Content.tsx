import React, { Suspense, useEffect, useState } from "react";
import SelectFilter from "./SelectFilter";
import { useDebounce } from "@/app/_hooks/useDebounce";
import Filters from "./Filters";
import {
  PaginationTypeArticles,
  useGetArticlesSearchQuery,
} from "@/app/_redux/features/articlesApiSlice";
import ArticleItem from "../profile/ArticleItem";
import Spinner from "../ui/Spinner";
import ArticlesContainer from "./ArticlesContainer";
import { SearchParams } from "@/app/browse/page";
import { getArticlesSearch } from "@/app/_actions/articlesActions";

interface ContentProps {
  params: SearchParams;
}

export default async function Content({ params }: ContentProps) {
  const data: PaginationTypeArticles = await getArticlesSearch(params);

  return (
    <div className="w-full max-w-[1800px] mx-auto">
      <SelectFilter materialsCount={data.total} />
      <div className="grid md:grid-cols-[320px_1fr]">
        <Filters />
        <Suspense fallback={<Spinner color="green" size="big" />}>
          <ArticlesContainer data={data.items} />
        </Suspense>
      </div>
    </div>
  );
}
