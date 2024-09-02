import { Rating } from "@mui/material";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface RatingFilterProps {
  handleFilter: ({ param, filter }: { param: string; filter: string }) => void;
}

export default function RatingFilter({ handleFilter }: RatingFilterProps) {
  const searchParams = useSearchParams();

  const [minRating, setMinRating] = useState(
    searchParams.get("min_rating") || ""
  );

  useEffect(
    function () {
      handleFilter({
        param: "min_rating",
        filter: minRating,
      });
    },
    [minRating]
  );

  return (
    <div>
      <div className="flex justify-start items-center mt-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={minRating === "4.5"}
            onChange={() => {
              if (minRating === "4.5") {
                setMinRating("");
              } else {
                setMinRating("4.5");
              }
            }}
            className="hidden"
          />
          <span
            className={clsx(
              "h-5 w-5  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
              minRating === "4.5" && "border-mainGreen"
            )}
          >
            {minRating === "4.5" && (
              <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                <FaCheck size={12} className="" />
              </span>
            )}{" "}
          </span>
          <div className="cursor-pointer text-sm flex justify-center items-center ml-2 gap-2">
            {" "}
            <Rating value={4.5} precision={0.5} readOnly size="small" />
            <p>4.5 i więcej</p>
          </div>
        </label>
      </div>
      <div className="flex justify-start items-center mt-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={minRating === "4.0"}
            onChange={() => {
              if (minRating === "4.0") {
                setMinRating("");
              } else {
                setMinRating("4.0");
              }
            }}
            className="hidden"
          />
          <span
            className={clsx(
              "h-5 w-5  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
              minRating === "4.0" && "border-mainGreen"
            )}
          >
            {minRating === "4.0" && (
              <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                <FaCheck size={12} className="" />
              </span>
            )}{" "}
          </span>
          <div className="cursor-pointer text-sm flex justify-center items-center ml-2 gap-2">
            {" "}
            <Rating value={4.0} precision={0.5} readOnly size="small" />
            <p>4.0 i więcej</p>
          </div>
        </label>
      </div>
      <div className="flex justify-start items-center mt-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={minRating === "3.5"}
            onChange={() => {
              if (minRating === "3.5") {
                setMinRating("");
              } else {
                setMinRating("3.5");
              }
            }}
            className="hidden"
          />
          <span
            className={clsx(
              "h-5 w-5  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
              minRating === "3.5" && "border-mainGreen"
            )}
          >
            {minRating === "3.5" && (
              <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                <FaCheck size={12} className="" />
              </span>
            )}{" "}
          </span>
          <div className="cursor-pointer text-sm flex justify-center items-center ml-2 gap-2">
            {" "}
            <Rating value={3.5} precision={0.5} readOnly size="small" />
            <p>3.5 i więcej</p>
          </div>
        </label>
      </div>
      <div className="flex justify-start items-center mt-3">
        <label className="flex items-center ">
          <input
            type="checkbox"
            checked={minRating === "3.0"}
            onChange={() => {
              if (minRating === "3.0") {
                setMinRating("");
              } else {
                setMinRating("3.0");
              }
            }}
            className="hidden"
          />
          <span
            className={clsx(
              "h-5 w-5  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
              minRating === "3.0" && "border-mainGreen"
            )}
          >
            {minRating === "3.0" && (
              <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                <FaCheck size={12} className="" />
              </span>
            )}{" "}
          </span>
          <div className="cursor-pointer text-sm flex justify-center items-center ml-2 gap-2">
            {" "}
            <Rating value={3.0} precision={0.5} readOnly size="small" />
            <p>3.0 i więcej</p>
          </div>
        </label>
      </div>
    </div>
  );
}
