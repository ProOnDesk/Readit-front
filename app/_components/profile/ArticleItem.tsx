import { Article } from "@/app/_redux/features/authApiSlice";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface ArticleItemProps {
  article: Article;
  isCreator?: boolean;
}

export default function ArticleItem({
  article,
  isCreator = false,
}: ArticleItemProps) {
  const link = isCreator
    ? `/materials/view/${encodeURIComponent(article.slug)}`
    : `/materials/${encodeURIComponent(article.slug)}`;

  return (
    <Link
      href={link}
      className="w-full max-h-[355px] flex flex-col justify-start items-start shadow-xl rounded-lg overflow-hidden group"
    >
      <div className="relative w-full aspect-video overflow-hidden object-contain object-center">
        <Image
          fill
          src={article.title_image_url}
          className="object-cover object-center w-full h-full"
          alt={`${article.title}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
      </div>
      <div className="w-full h-[148px] px-3 py-2 flex justify-between items-start flex-col pb-2">
        <div className="flex justify-between w-full items-center text-xs">
          <p className="flex justify-center items-center gap-1 text-slate-400">
            {article.view_count}{" "}
            <span>
              <MdOutlineRemoveRedEye />
            </span>
          </p>{" "}
          <div className="flex justify-center items-center gap-1">
            <p className="font-medium">{article.rating.toPrecision(3)}</p>
            <Rating
              value={article.rating}
              readOnly
              precision={0.1}
              size="small"
            />
            <p className="text-slate-400">({article.rating_count})</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start pt-2 w-full">
          <h4 className="text-xl font-semibold line-clamp-2">
            {article.title}
          </h4>
          <p className="text-sm text-slate-400">
            {article.author.first_name} {article.author.last_name}
          </p>
        </div>
        <div className="w-full mt-auto ">
          {article.is_free ? (
            <p className="text-right font-bold">Bezpłatny</p>
          ) : (
            <p className="text-right font-bold">
              {article.price.toPrecision(3)} PLN
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
