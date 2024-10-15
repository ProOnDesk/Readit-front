import { Rating } from "@mui/material";
import clsx from "clsx";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface ArticleItemLoaderProps {
  className?: string;
}

export default function ArticleItemLoader({
  className,
}: ArticleItemLoaderProps) {
  return (
    <div
      className={clsx(
        "w-full max-h-[355px] flex flex-col justify-start items-start shadow-xl rounded-lg overflow-hidden group",
        className
      )}
    >
      <div className="relative w-full aspect-video overflow-hidden object-contain object-center">
        <div className="object-cover object-center w-full h-full bg-gray-300" />
        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
      </div>
      <div className="w-full h-[148px] px-3 py-2 flex justify-between items-start flex-col pb-2">
        <div className="flex justify-between w-full items-center text-xs">
          <p className="flex justify-center items-center gap-1 text-slate-400">
            --
            <span>
              <MdOutlineRemoveRedEye />
            </span>
          </p>{" "}
          <div className="flex justify-center items-center gap-1">
            <Rating value={0} readOnly size="small" color="gray" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start pt-2 w-full">
          <span className="text-xl font-semibold line-clamp-2 bg-gray-300 w-7/12 h-5"></span>
          <div className="flex justify-start items-center gap-3 w-full mt-2">
            <span className="block bg-gray-300 w-2/12 h-4"></span>
            <span className="block bg-gray-300 w-3/12 h-4"></span>
          </div>
        </div>
        <div className="w-full mt-auto ">
          <p className="text-right font-bold">-- PLN</p>
        </div>
      </div>
    </div>
  );
}
