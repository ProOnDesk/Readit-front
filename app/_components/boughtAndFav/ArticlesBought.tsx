"use client";

import {
  PaginationTypeArticles,
  useGetBoughtArticlesMutation,
} from "@/app/_redux/features/articlesApiSlice";
import { useEffect } from "react";
import { ImFileEmpty } from "react-icons/im";
import PaginationArticles from "../browseArticles/PaginationArticles";
import ArticleItemSec from "./ArticleItemSec";
import ArticleItemSecLoader from "./ArticleItemSecLoader";

interface ArticlesBoughtProps {
  page: string;
}

export default function ArticlesBought({ page = "1" }: ArticlesBoughtProps) {
  const [fetchBoughtArticles, { isLoading, data }] =
    useGetBoughtArticlesMutation();

  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  useEffect(() => {
    fetchBoughtArticles({ page });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [fetchBoughtArticles, page]);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20">
        <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
          Biblioteka
        </h3>
        <p>Posiadane materiały: {data?.total ? data.total : 0}</p>
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
                  isInLib={true}  
                  key={article.article.id}
                />
              ))}
              {data?.items.length === 0 && (
                <div className="col-span-5 place-self-center flex justify-center items-center gap-2">
                  <ImFileEmpty /> Brak materiałów w bibliotece, zakup lub dodaj
                  coś co cię interesuje, a twoje materiały pojawią się tutaj.
                </div>
              )}
            </div>
            {data?.items && data?.items?.length > 0 && (
              <PaginationArticles
                data={data as unknown as PaginationTypeArticles}
              />
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
}
