import React from "react";
import ArticleItem from "../profile/ArticleItem";
import { Article } from "@/app/_redux/features/authApiSlice";

interface ArticlesContainerProps {
  data: Article[];
}

export default function ArticlesContainer({ data }: ArticlesContainerProps) {
  return (
    <div className="grid grid-cols-1 sm550:grid-cols-2 md800:grid-cols-3 lg1100:grid-cols-4 gap-x-3 gap-y-6 pb-10">
      {data?.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
}
