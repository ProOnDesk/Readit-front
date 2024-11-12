"use client";

import { useFollowUSer } from "@/app/_hooks/useFollowUser";
import { useUnfollowUSer } from "@/app/_hooks/useUnfollowUser";
import {
  GetUserType,
  useCheckIfFollowQuery,
  useGetUserFollowersQuery,
  User,
  useRetrieveUserQuery,
} from "@/app/_redux/features/authApiSlice";
import { notFound } from "next/navigation";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import Link from "next/link";

interface FollowersAndButtonProps {
  user: User | undefined;
}

export default function FollowersAndButton({ user }: FollowersAndButtonProps) {
  const { data: me, isLoading: isLoadingMe } = useRetrieveUserQuery();
  const { isLoading, data, refetch } = useGetUserFollowersQuery({
    userId: user?.id || notFound(),
  });
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
      <p className="text-center mt-5 md900:text-left">
        <span className="font-semibold">
          {isLoading ? "---" : data?.follows_amount}
        </span>{" "}
        obserwacji
      </p>
      <div className="w-full flex justify-center items-center gap-3 mt-5 md900:justify-start">
        {(isLoadingCheck || isLoadingMe) && (
          <div className="bg-mainGreen text-white hover:bg-mainGreenSecond border-2 border-transparent transition-colors duration-300 rounded-md px-14 py-2">
            <Spinner />
          </div>
        )}
        {!isLoadingCheck &&
          !isLoadingMe &&
          (me?.id === user?.id ? (
            <Link
              href="/app/profile"
              className="border border-stone-300 rounded-md px-4 py-2"
            >
              Edytuj profil
            </Link>
          ) : isFollowing?.is_followed ? (
            <button
              onClick={unfollowUserHookFn}
              className="bg-white text-mainGreen border-2 border-mainGreen hover:border-mainGreenSecond hover:textmas transition-colors duration-300 rounded-md px-4 py-2"
              disabled={isLoadingUnfollow}
            >
              Przestań obserwować
            </button>
          ) : (
            <button
              onClick={followUserHookFn}
              className="bg-mainGreen text-white hover:bg-mainGreenSecond border-2 border-transparent transition-colors duration-300 rounded-md px-4 py-2"
              disabled={isLoadingFollow}
            >
              Obserwuj twórcę
            </button>
          ))}
      </div>
    </>
  );
}
