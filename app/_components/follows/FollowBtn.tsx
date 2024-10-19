"use client";

import { useFollowUSer } from "@/app/_hooks/useFollowUser";
import { useUnfollowUSer } from "@/app/_hooks/useUnfollowUser";
import {
  GetUserType,
  useCheckIfFollowQuery,
  useGetUserFollowersQuery,
  useRetrieveUserQuery,
} from "@/app/_redux/features/authApiSlice";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

interface FollowersAndButtonProps {
  user: GetUserType | undefined;
}

export default function FollowBtn({ user }: FollowersAndButtonProps) {
  const { data: me, isLoading: isLoadingMe } = useRetrieveUserQuery();
  const { isLoading, data, refetch } = useGetUserFollowersQuery({
    userId: user?.id || notFound(),
  });
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const {
    followUserHookFn,
    isSuccess: isSuccessFollow,
    isLoading: isLoadingFollow,
  } = useFollowUSer({
    userId: String(user?.id),
  });
  const {
    unfollowUserHookFn,
    isSuccess: isSuccessUnfollow,
    isLoading: isLoadingUnfollow,
  } = useUnfollowUSer({
    userId: String(user?.id),
  });
  const { data: isFollowing, isLoading: isLoadingCheck } =
    useCheckIfFollowQuery({
      userId: String(user?.id),
    });

  useEffect(
    function () {
      if (isSuccessFollow || isSuccessUnfollow) {
        refetch();
      }
    },
    [isSuccessFollow, isSuccessUnfollow, refetch]
  );

  return (
    <>
      {isLoadingCheck || isLoadingMe ? (
        <div className="bg-mainGreen text-white hover:bg-mainGreenSecond border-2 border-transparent transition-colors duration-300 rounded-full w-[112px] h-[47px] text-sm font-semibold flex justify-center items-center">
          <Spinner />
        </div>
      ) : !isLoadingCheck && !isLoadingMe && isFollowing?.is_followed ? (
        <button
          onClick={unfollowUserHookFn}
          className="bg-white text-mainGreen border-2 border-mainGreen hover:border-mainGreenSecond transition-colors duration-300 rounded-full px-6 py-3 text-sm font-semibold"
          disabled={isLoadingUnfollow}
        >
          Zrezygnuj
        </button>
      ) : (
        <button
          onClick={followUserHookFn}
          className="bg-mainGreen text-white hover:bg-mainGreenSecond border-2 border-transparent transition-colors duration-300 rounded-full px-6 py-3 text-sm font-semibold"
          disabled={isLoadingFollow}
        >
          Obserwuj
        </button>
      )}
    </>
  );
}
