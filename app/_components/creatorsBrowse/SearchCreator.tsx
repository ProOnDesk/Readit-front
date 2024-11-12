import { Suspense } from "react";
import UserItemLoader from "../follows/UserItemLoader";
import CreatorsFilters from "./CreatorsFilters";
import UsersContainer from "./UsersContainer";
import PaginationArticles from "../browseArticles/PaginationArticles";
import { getCreatorsSearch } from "@/app/_actions/profileActions";

interface SearchCreatorProps {
  searchParams: { page: string; sort_by: string; value: string };
}

export default async function SearchCreator({
  searchParams,
}: SearchCreatorProps) {
  const creators = await getCreatorsSearch(searchParams);

  return (
    <div className="w-full px-4 sm:px-12 mb-10 max-w-[1600px] mx-auto flex flex-col justify-center items-center sm:items-start ">
      <CreatorsFilters />
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={
          <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] mb-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <UserItemLoader key={index} />
            ))}
          </div>
        }
      >
        <UsersContainer searchParams={searchParams} />
      </Suspense>
      <PaginationArticles data={creators} isBrowse />
    </div>
  );
}
