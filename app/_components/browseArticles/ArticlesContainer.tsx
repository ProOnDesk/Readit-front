import React, { Suspense } from "react";
import ArticleItem from "../profile/ArticleItem";
import { Article } from "@/app/_redux/features/authApiSlice";
import Spinner from "../ui/Spinner";
import { Pagination } from "@mui/material";
import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginationArticles from "./PaginationArticles";
import { ImFileEmpty } from "react-icons/im";

interface ArticlesContainerProps {
  data: PaginationTypeArticles;
}

export default function ArticlesContainer({ data }: ArticlesContainerProps) {
  return (
    <div className="grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10">
      {data?.items.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
      {data?.items.length === 0 && (
        <div className="col-span-5 place-self-center flex justify-center items-center gap-2">
          <ImFileEmpty /> Materiałów na poszukiwany przez Ciebie temat brakuje u nas w bazie :(
        </div>
      )}
    </div>
  );
}
