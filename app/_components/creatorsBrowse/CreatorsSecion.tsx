"use client";

import { User } from "@/app/_redux/features/authApiSlice";
import {
  useGetUsersTopFollowsMutation,
  PaginatonType,
} from "@/app/_redux/features/creatorsApiSlice";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function CreatorsSecion() {
  const [topUsersFollows, setTopUsersFollows] = useState<User[]>([]);
  const [page, setPage] = useState(2);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [getUsersTopFollows, { isLoading, data }] =
    useGetUsersTopFollowsMutation();

  useEffect(
    function () {
      getUsersTopFollows({ page: 1 })
        .unwrap()
        .then((res: PaginatonType) => {
          setTopUsersFollows(res.items);
        });
    },
    [getUsersTopFollows]
  );

  useEffect(
    function () {
      if (!isLoading && data && page > 2) {
        setTopUsersFollows((users) => [...users, ...data.items]);
      }
    },
    [page, data, isLoading]
  );

  return (
    <div className="w-full px-4 ">
      <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-center">
        Najchętniej obserwowani
      </h3>
      <div className="w-full mx-auto">
        <div className="w-full grid sm:grid-cols-2 gap-4">
          {topUsersFollows.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
          <button
            onClick={() => {
              setPage((page) => page + 1);
              getUsersTopFollows({ page });
            }}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
