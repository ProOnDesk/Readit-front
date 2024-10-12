import {
    useChangeArticleFavoritesMutation,
    useCheckIsWishedQuery,
} from "@/app/_redux/features/articleApiSLice";
import {
    Article
} from "@/app/_redux/features/authApiSlice";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ArticleItem from "../profile/ArticleItem";

interface ArticleItemSecProps {
  article: Article;
}

export default function ArticleItemSec({ article }: ArticleItemSecProps) {
  const [
    changeArticleFavorites,
    { isLoading: isChangingArticleFavoritesLoading },
  ] = useChangeArticleFavoritesMutation();
  const [hovered, setHovered] = React.useState(false);
  const {
    data: isWished,
    refetch: refechIsWished,
    isLoading: IsWishedLoading,
  } = useCheckIsWishedQuery({
    article_id: article.id,
  });

  function handleAddArticleToFavourites(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.stopPropagation();
    e.preventDefault();
    changeArticleFavorites({ article_id: article.id })
      .unwrap()
      .then((res) => {
        refechIsWished();
        toast.success(res?.detail);
      })
      .catch((error) => {
        toast.error("Nie udało się edytować listy ulubionych");
      });
  }

  return (
    <>
      <ArticleItem
        article={article}
        className="sm:hidden max-w-[450px] mx-auto"
      />
      <Link
        href={`/materials/view/${encodeURIComponent(article.slug)}`}
        className="group cursor-pointer max-w-[900px] w-full h-[140px] mx-auto justify-between items-start hidden sm:flex"
      >
        <div className="grid grid-cols-[248px_1fr_100px] h-full w-full">
          <div className="relative h-[140px] w-[248px] overflow-hidden object-center ">
            <Image
              fill
              src={article.title_image_url}
              className="object-center h-full w-full"
              alt={`${article.title}`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col justify-start items-start pl-4">
            <div className="flex flex-col justify-center items-start">
              <h4 className="text-xl font-semibold line-clamp-1">
                {article.title}
              </h4>
              <p className="text-sm text-slate-400">
                {article.author.first_name} {article.author.last_name}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="font-medium text-sm">
                {article.rating.toPrecision(3)}
              </p>
              <Rating
                value={article.rating}
                readOnly
                precision={0.1}
                size="small"
              />
              <p className="text-slate-400 text-sm">({article.rating_count})</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="text-right font-bold">W bibliotece</p>
            <div className="">
              <button
                type="button"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                disabled={isChangingArticleFavoritesLoading || IsWishedLoading}
                onClick={handleAddArticleToFavourites}
                className={`relative h-[30px] w-[30px] text-mainGreen hover:text-mainGreenSecond transition-colors duration-300`}
              >
                {!isWished ? (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FaRegHeart size={24} />
                  </span>
                ) : (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FaHeart size={24} />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
