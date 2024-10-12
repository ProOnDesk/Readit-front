"use client";

import {
  PaginationTypeArticles,
  useGetBoughtArticlesMutation,
  useGetFavArticlesMutation,
} from "@/app/_redux/features/articlesApiSlice";
import { useEffect } from "react";
import { ImFileEmpty } from "react-icons/im";
import PaginationArticles from "../browseArticles/PaginationArticles";
import ArticleItemSec from "./ArticleItemSec";
import ArticleItemSecLoader from "./ArticleItemSecLoader";

interface ArticlesFavProps {
  page: string;
}

export default function ArticlesFav({ page = "1" }: ArticlesFavProps) {
  const [fetchFavArticles, { isLoading, data }] = useGetFavArticlesMutation();

  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  useEffect(() => {
    fetchFavArticles({ page });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [fetchFavArticles, page]);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20">
        <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
          Polubione materiały
        </h3>
        <p>Polubione: {data?.total}</p>
      </div>
      <div>
        {isLoading ? (
          <>
            <div className="grid grid-cols-1  gap-x-3 gap-y-6 pb-10 place-content-start px-4">
              {Array.from({ length: 20 }).map((_, index) => (
                <ArticleItemSecLoader key={index} />
              ))}
            </div>
            <PaginationArticles />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1  gap-x-3 gap-y-6 pb-10 place-content-start px-4">
              {data?.items.map((article) => (
                <ArticleItemSec
                  article={article.article}
                  isInLib={false}
                  key={article.article.id}
                />
              ))}
              {data?.items.length === 0 && (
                <div className="col-span-5 place-self-center flex justify-center items-center gap-2 justify-self-center">
                  <ImFileEmpty /> Brak polubionych materiałów, dodaj je!
                </div>
              )}
            </div>
            {data?.items && data?.items?.length > 0 && (
              <PaginationArticles
                data={data as unknown as PaginationTypeArticles}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
