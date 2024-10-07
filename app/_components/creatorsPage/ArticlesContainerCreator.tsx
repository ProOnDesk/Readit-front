import React from "react";
import ArticleItem from "../profile/ArticleItem";
import { fetchUserArticles } from "@/app/_actions/profileActions";

interface ArticlesContainerCreatorProps {
  page: string;
  userId: number;
}

export default async function ArticlesContainerCreator({
  page,
  userId,
}: ArticlesContainerCreatorProps) {
  const data = await fetchUserArticles({ userId, page });
  return (
    <>
      {data?.items.map((article, i) => (
        <ArticleItem article={article} key={i} />
      ))}
    </>
  );
}
