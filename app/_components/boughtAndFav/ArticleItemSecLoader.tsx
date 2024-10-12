import {
  useChangeArticleFavoritesMutation,
  useCheckIsWishedQuery,
} from "@/app/_redux/features/articleApiSLice";
import { Article } from "@/app/_redux/features/authApiSlice";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ArticleItem from "../profile/ArticleItem";
import ArticleItemLoader from "../profile/ArticleItemLoader";

interface ArticleItemSecProps {
  article: Article;
}

export default function ArticleItemSecLoader() {
  return (
    <>
      <ArticleItemLoader className="sm:hidden max-w-[450px] mx-auto w-full" />
      <div className="max-w-[900px] w-full h-[140px] mx-auto justify-between items-start hidden sm:flex">
        <div className="grid grid-cols-[248px_1fr_100px] h-full w-full">
          <div className="relative h-[140px] w-[248px] overflow-hidden object-center ">
            <div className="object-center h-full w-full bg-gray-300" />
            <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0" />
          </div>
          <div className="flex flex-col justify-start items-start pl-4">
            <div className="flex flex-col justify-center items-start">
              <div className="h-[20px] w-[160px] bg-gray-300"></div>
              <div className="flex gap-1 pt-2">
                <span className="block bg-gray-300 w-[60px] h-4"></span>
                <span className="block bg-gray-300 w-[60px] h-4"></span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="font-medium text-sm">--</p>
              <Rating value={0} readOnly size="small" color="gray" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="text-right font-bold"></p>
            <div className="">
              <div className={`relative h-[30px] w-[30px] text-gray-300`}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <FaRegHeart size={24} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
