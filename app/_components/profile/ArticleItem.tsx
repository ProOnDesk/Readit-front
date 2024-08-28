import { Article } from "@/app/_redux/features/authApiSlice";
import React from "react";

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({article}: ArticleItemProps) {
  return <div>{article.id}</div>;
}
