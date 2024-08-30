/* eslint-disable @next/next/no-img-element */
import { User } from "@/app/_redux/features/authApiSlice";
import React from "react";
import { PiArticle } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

interface UserItemProps {
  user: User | undefined;
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <div className="w-full max-w-[340px] h-full max-h-[340px] shadow-md rounded-lg bg-white hover:bg-whiteSecond transition-colors duration-300 overflow-hidden group">
      <div className="relative h-[30%] w-full">
        <div className="h-full w-full">
          <img
            src={user?.background_image}
            className="object-cover object-center  h-full w-full"
            alt={`${user?.first_name} ${user?.last_name}`}
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4/12 max-w-[113px] aspect-square rounded-full overflow-hidden border-[10px] border-white bg-white group-hover:border-whiteSecond transition-colors duration-300">
          <img
            src={user?.avatar}
            className="object-cover"
            alt={`${user?.first_name} ${user?.last_name}`}
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center flex-col mt-14 px-4 ">
        <p className="text-lg font-medium">
          {user?.first_name} {user?.last_name}{" "}
        </p>
        <p className="text-slate-400 mt-2 text-center">
          {user?.short_description}
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-5 mt-5">
        <div className="">
          <p className="flex flex-col justify-center items-center">
            <span className="font-medium text-xl">{user?.article_count}</span>
            Materiałów
          </p>
        </div>
        <div>
          <p className="flex flex-col justify-center items-center ">
            <span className="font-medium text-xl">{user?.follower_count}</span>
            Obserwujących
          </p>
        </div>
      </div>
      {/* <div className="place-self-stretch flex justify-center items-start flex-col text-left">
        <p className="text-lg font-medium">
          {user?.first_name} {user?.last_name}{" "}
        </p>
        <div className="w-5/12 h-[1px] bg-slate-300" />
        <p>{user?.sex}</p>
      </div>
      <div className="place-self-start px-3">
        <p className="flex justify-center items-center gap-1 text-lg font-medium">
          <span>
            <IoEyeOutline />
          </span>
          {user?.follower_count}
        </p>
        <p className="flex justify-center items-center gap-1 text-lg font-medium">
          <span>
            <PiArticle />
          </span>
          {user?.article_count}
        </p>
      </div>
      <div>
        <p className="line-clamp-2">{user?.short_description}</p>
      </div> */}
    </div>
  );
}
