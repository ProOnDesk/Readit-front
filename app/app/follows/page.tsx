import PaginationArticles from "@/app/_components/browseArticles/PaginationArticles";
import FollowedByMe from "@/app/_components/follows/FollowedByMe";
import UsersContainer from "@/app/_components/follows/UsersContainer";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <FollowedByMe page={searchParams.page} />
    </div>
  );
}
