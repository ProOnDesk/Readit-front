import { getArticlesSearch } from "@/app/_actions/articlesActions";
import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { SearchParams } from "@/app/browse/page";
import { Suspense } from "react";
import ArticleItemLoader from "../profile/ArticleItemLoader";
import ArticlesContainer from "./ArticlesContainer";
import Filters from "./Filters";
import PaginationArticles from "./PaginationArticles";
import SelectFilter from "./SelectFilter";

interface ContentProps {
  params: SearchParams;
}

export default async function Content({ params }: ContentProps) {
  const data: PaginationTypeArticles = await getArticlesSearch(params);

  return (
    <div className="w-full max-w-[1800px] mx-auto">
      <SelectFilter materialsCount={data?.total} />
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] px-4 md:px-8 min-h-screen">
        <Filters />
        <Suspense
          key={JSON.stringify(params)}
          fallback={
            <div className="grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start">
              {Array.from({ length: 24 }).map((_, index) => (
                <ArticleItemLoader key={index} />
              ))}
            </div>
          }
        >
          <ArticlesContainer params={params} />
        </Suspense>
        <PaginationArticles data={data} isBrowse />
      </div>
    </div>
  );
}
