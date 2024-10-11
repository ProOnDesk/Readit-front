"use client";

import {
  PaginationTypeArticles,
  useGetBoughtArticlesMutation,
} from "@/app/_redux/features/articlesApiSlice";
import { useGetUserFollwedByMeMutation } from "@/app/_redux/features/authApiSlice";
import { useEffect } from "react";
import PaginationArticles from "../browseArticles/PaginationArticles";
import UserItemLoader from "./UserItemLoader";
import UsersContainer from "./UsersContainer";
import ArticleItemLoader from "../profile/ArticleItemLoader";
import ArticlesContainer from "../browseArticles/ArticlesContainer";
import ArticleItem from "../profile/ArticleItem";
import { ImFileEmpty } from "react-icons/im";

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

  console.log(data?.items);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20">
        <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
          Moje dodane materiały
        </h3>
        <p>Materiały: {data?.total}</p>
      </div>
      <div>
        {isLoading ? (
          <>
            <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] transition-all duration-300 px-4">
              {Array.from({ length: 24 }).map((_, index) => (
                <ArticleItemLoader key={index} />
              ))}
            </div>
            <PaginationArticles />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start">
              {data?.items.map((article) => (
                <ArticleItem article={article.article} key={article.id} />
              ))}
              {data?.items.length === 0 && (
                <div className="col-span-5 place-self-center flex justify-center items-center gap-2">
                  <ImFileEmpty /> Brak materiałów w bibliotece, zakup lub dodaj
                  coś co cię interesuje, a twoje materiały pojawią się tutaj.
                </div>
              )}
            </div>
            <PaginationArticles
              data={data as unknown as PaginationTypeArticles}
            />
          </>
        )}
      </div>
    </div>
  );
}
