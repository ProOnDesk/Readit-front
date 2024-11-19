"use client";

import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { useGetUserFollwedByMeMutation } from "@/app/_redux/features/authApiSlice";
import { useEffect } from "react";
import PaginationArticles from "../browseArticles/PaginationArticles";
import UserItemLoader from "./UserItemLoader";
import UsersContainer from "./UsersContainer";

interface FollowedByMeProps {
  page: string;
}

export default function FollowedByMe({ page = "1" }: FollowedByMeProps) {
  const [fetchFollows, { isLoading, data }] = useGetUserFollwedByMeMutation();

  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  useEffect(() => {
    fetchFollows({ page });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [fetchFollows, page]);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20">
        <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
          Moje obserwacje
        </h3>
        <p>Obserwowani: {data?.total}</p>
      </div>
      <div>
        {isLoading ? (
          <>
            <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] transition-all duration-300 px-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <UserItemLoader key={index} />
              ))}
            </div>
            <PaginationArticles />
          </>
        ) : (
          <>
            <UsersContainer data={data} />
            {data?.total === 0 ? (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p className="text-lg font-semibold text-center">
                  Nie obserwujesz jeszcze żadnych użytkowników
                </p>
              </div>
            ) : (
              <PaginationArticles
                data={data as unknown as PaginationTypeArticles}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
