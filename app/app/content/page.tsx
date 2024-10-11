
import ArticlesBought from "@/app/_components/bought/ArticlesBought";

export default function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {

  return (
    <div>
      <ArticlesBought page={searchParams.page} />
    </div>
  );
}
