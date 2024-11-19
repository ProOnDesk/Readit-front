import { useDebounce } from "@/app/_hooks/useDebounce";
import { useGetMyArticlesQuery } from "@/app/_redux/features/articlesApiSlice";
import { Article } from "@/app/_redux/features/authApiSlice";
import { Pagination } from "@mui/material";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

interface AddArticlesToPackageProps {
  articlesInPackage: Article[];
  setArticlesInPackage: React.Dispatch<React.SetStateAction<Article[]>>;
}

export default function AddArticlesToPackage({
  articlesInPackage,
  setArticlesInPackage,
}: AddArticlesToPackageProps) {
  const [focus, setFocus] = useState(false);
  const [page, setPage] = useState("1");
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 1000);
  const {
    data: articleList,
    isLoading: isArticleListLoading,
    isFetching: isArticleListFetching,
    refetch: refetchArticleList,
  } = useGetMyArticlesQuery({
    page: page || "1",
    value: debouncedValue || "",
  });

  useEffect(() => {
    refetchArticleList();
  }, [debouncedValue, refetchArticleList]);

  return (
    <div className="w-full">
      <p className="text-lg font-semibold">Materiały w zestawie:</p>
      <div className="space-y-1 my-8">
        {articlesInPackage.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-5">
            Brak materiałów w zestawie, dodaj coś!
          </p>
        )}
        {articlesInPackage.map((article) => (
          <button
            key={article.id}
            type="button"
            className="w-full flex flex-col sm500:flex-row justify-between items-end sm500:items-center py-2 px-2 gap-2 hover:bg-whiteSecond transition-colors duration-300 rounded-md text-left"
            onClick={() => {
              setArticlesInPackage(
                articlesInPackage.filter((a) => a.id !== article.id)
              );
            }}
          >
            <div className="flex justify-start items-center gap-3 sm500:max-w-[70%] w-full">
              <div className="h-[50px] aspect-video relative">
                <Image
                  src={article.title_image_url}
                  alt={article.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="line-clamp-2">{article.title}</p>
            </div>
            <div>
              {article.is_free ? (
                <p className="text-right font-bold">Bezpłatny</p>
              ) : (
                <p className="text-right font-bold">
                  {article.price.toPrecision(3)} PLN
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
      <p className="text-lg font-semibold mb-3 pt-5">Twoje materiały:</p>
      <div className="pb-5">
        <div className=" h-[50px] w-full flex justify-start  flex-col">
          <div className="relative flex justify-center items-center w-full py-2">
            <div
              className={`${
                focus ? "text-mainGreen" : "text-blackSecond"
              } transition-colors duration-300`}
            >
              <SearchIcon size={20} />
            </div>
            <input
              className="border-none focus:outline-none px-3 w-full"
              type="text"
              placeholder="Wyszukaj artykuł"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
            />
            <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-mainGreen"></div>
          </div>
        </div>
      </div>
      {isArticleListLoading || isArticleListFetching ? (
        <div className="h-36 my-8 flex justify-center items-center">
          <Spinner color="green" size="big" />
        </div>
      ) : (
        <div className="space-y-1 my-8 min-h-36">
          {articleList?.items?.filter((article) =>
            articlesInPackage.every((a) => a.id !== article.id)
          ).length === 0 && (
            <p className="text-sm text-slate-400 text-center py-5">
              Brak materiałów do dodania
            </p>
          )}
          {articleList?.items
            ?.filter((article) =>
              articlesInPackage.every((a) => a.id !== article.id)
            )
            .map((article) => (
              <button
                key={article.id}
                type="button"
                className="w-full flex flex-col sm500:flex-row justify-between items-end sm500:items-center py-2 px-2 gap-2 hover:bg-whiteSecond transition-colors duration-300 rounded-md text-left"
                onClick={() => {
                  setArticlesInPackage([...articlesInPackage, article]);
                }}
              >
                <div className="flex justify-start items-center gap-3 sm500:max-w-[70%] w-full">
                  <div className="h-[50px] aspect-video relative">
                    <Image
                      src={article.title_image_url}
                      alt={article.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="line-clamp-2">{article.title}</p>
                </div>
                <div>
                  {article.is_free ? (
                    <p className="text-right font-bold">Bezpłatny</p>
                  ) : (
                    <p className="text-right font-bold">
                      {article.price.toPrecision(3)} PLN
                    </p>
                  )}
                </div>
              </button>
            ))}
        </div>
      )}
      <div className="w-full flex justify-center items-center py-5">
        <Pagination
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#9ef01a !important",
              color: "#ffffff !important",
              "&:hover": {
                backgroundColor: "#70e000 !important",
              },
            },
          }}
          count={articleList?.pages || 1}
          page={+page}
          disabled={articleList?.pages === 1 || !articleList}
          onChange={(_event, value) => setPage(value.toString())}
          color="primary"
        />
      </div>
    </div>
  );
}
