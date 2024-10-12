import ArticlesFav from "@/app/_components/boughtAndFav/ArticlesFav";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <ArticlesFav page={searchParams.page} />
    </div>
  );
}
