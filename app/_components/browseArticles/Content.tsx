import { getArticlesSearch } from "@/app/_actions/articlesActions";
import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { SearchParams } from "@/app/browse/page";
import ArticlesContainer from "./ArticlesContainer";
import Filters from "./Filters";
import PaginationArticles from "./PaginationArticles";
import SelectFilter from "./SelectFilter";

interface ContentProps {
  params: SearchParams;
}

// export const revalidate = 0;

export default async function Content({ params }: ContentProps) {
  const data: PaginationTypeArticles = await getArticlesSearch(params);

  return (
    <div className="w-full max-w-[1800px] mx-auto">
      <SelectFilter materialsCount={data.total} />
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] px-4 md:px-8 min-h-screen">
        <Filters />
        <ArticlesContainer data={data} />
        <PaginationArticles data={data} />
      </div>
    </div>
  );
}
