"use client";

import { useGetUserFollwedByMeQuery } from "@/app/_redux/features/authApiSlice";
import React, { useEffect } from "react";
import UsersContainer from "./UsersContainer";
import PaginationArticles from "../browseArticles/PaginationArticles";
import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import Spinner from "../ui/Spinner";

interface FollowedByMeProps {
  page: string;
}

export default function FollowedByMe({ page = "1" }: FollowedByMeProps) {
  const { data, isLoading, isFetching } = useGetUserFollwedByMeQuery({ page });

  useEffect(() => {
    if (!isLoading && !isFetching) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isLoading, isFetching]);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="py-12 md:py-16 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:py-20">
        <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
          Moje obserwacje
        </h3>
        <p>Obserwowani: {data?.total}</p>
      </div>
      <div>
        {isLoading || isFetching ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner color="green" size="big" />
          </div>
        ) : (
          <>
            <UsersContainer data={data} />
            <PaginationArticles
              data={data as unknown as PaginationTypeArticles}
            />
          </>
        )}
      </div>
    </div>
  );
}
