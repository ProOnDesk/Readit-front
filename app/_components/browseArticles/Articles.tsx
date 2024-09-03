import { getArticlesSearch } from "@/app/_actions/articlesActions";
import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { SearchParams } from "@/app/browse/page";
import ArticlesContainer from "./ArticlesContainer";
import PaginationArticles from "./PaginationArticles";

interface ArticlesProps {
  params: SearchParams;
}

export default async function Articles({ params }: ArticlesProps) {
  const data: PaginationTypeArticles = await getArticlesSearch(params);

  return (
    <>
      <ArticlesContainer data={data} />
      <PaginationArticles data={data} />
    </>
  );
}
