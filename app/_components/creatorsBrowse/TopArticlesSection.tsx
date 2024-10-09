"use client";

import { GetUserType, User } from "@/app/_redux/features/authApiSlice";
import {
  PaginatonType,
  useGetUsersTopArticlesMutation,
} from "@/app/_redux/features/creatorsApiSlice";
import { useEffect, useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
import Spinner from "../ui/Spinner";
import UserItem from "../follows/UserItem";

export default function TopArticlesSection() {
  const [topUsersFollows, setTopUsersFollows] = useState<GetUserType[]>([]);
  const [page, setPage] = useState(2);
  const [getUsersTopFollows, { isLoading, data }] =
    useGetUsersTopArticlesMutation();
  // const [userWidth, setUserWidth] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(function () {
    setItemsPerPage(
      (window.innerWidth > 1280 && 8) ||
        (window.innerWidth > 1024 && 6) ||
        (window.innerWidth > 640 && 4) ||
        2
    );
  }, []);

  useEffect(
    function () {
      getUsersTopFollows({ page: 1, size: 12 })
        .unwrap()
        .then((res: PaginatonType) => {
          setTopUsersFollows(res.items);
        });
    },
    [getUsersTopFollows, itemsPerPage]
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
    <div className="w-full px-4 pb-32">
      <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-center">
        Najbardziej zaangażowani
      </h3>
      <div className="w-full mx-auto pt-16 flex flex-col justify-center items-center gap-10">
        <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] transition-all duration-300">
          {topUsersFollows.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
        <div className=" flex justify-center items-center gap-5">
          {data && data.page > 1 && (
            <button
              className="px-8 py-3  text-mainGreen rounded-full transition-all duration-300 hover:border-mainGreenSecond flex justify-center items-center gap-2 text-lg font-semibold z-10 border-2 border-mainGreen"
              onClick={() => {
                setPage(2);
                getUsersTopFollows({ page: 1, size: 12 })
                  .unwrap()
                  .then((res: PaginatonType) => {
                    setTopUsersFollows(res.items);
                  });
              }}
            >
              Schowaj wszystko
            </button>
          )}
          {data && data.pages > data.page && (
            <button
              className="h-[52px] w-[210px] bg-mainGreen text-white rounded-full transition-all duration-300 hover:bg-mainGreenSecond flex justify-center items-center gap-2 text-lg font-semibold z-10"
              onClick={() => {
                setPage((page) => page + 1);
                getUsersTopFollows({ page, size: itemsPerPage });
              }}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <span>
                    <FiChevronsDown size={24} />
                  </span>
                  Pokaż więcej
                </>
              )}
            </button>
          )}
          {isLoading && <Spinner color="green" />}
        </div>
      </div>
    </div>
  );
}
